import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store';
import { renderWithProviders } from '../../test-utils';
import { CountryRegions } from '../../types';
import RegionFilter from './RegionFilter';

describe('RegionFilter component', () => {
  test('generates regions when clicking on the filter', () => {
    renderWithProviders(<RegionFilter resetPages={() => {}} />);

    userEvent.click(screen.getByTestId('showList'));

    const countryRegionsLength = Object.keys(CountryRegions).length;

    expect(screen.getAllByRole('listitem')).toHaveLength(countryRegionsLength);
  });

  test('hides regions when clicking twice on the filter', () => {
    renderWithProviders(<RegionFilter resetPages={() => {}} />);
    userEvent.dblClick(screen.getByTestId('showList'));
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  test('shows clicked list element as the filter header text', () => {
    renderWithProviders(<RegionFilter resetPages={() => {}} />);

    const clickedCountryRegion = CountryRegions.AFRICA;

    userEvent.click(screen.getByTestId('showList'));

    userEvent.click(screen.getByTestId(clickedCountryRegion));

    expect(screen.getByTestId('filterHeaderText').textContent).toBe(
      clickedCountryRegion
    );
  });

  test('displays original header text again after removing the selected filter', () => {
    renderWithProviders(<RegionFilter resetPages={() => {}} />);

    const header = screen.getByTestId('filterHeaderText');
    const originalHeaderText = header.textContent;

    userEvent.click(screen.getByTestId('showList'));

    userEvent.click(screen.getByTestId(CountryRegions.AMERICA));

    userEvent.click(screen.getByTestId('removeFilter'));

    expect(screen.getByTestId('filterHeaderText').textContent).toBe(
      originalHeaderText
    );
  });
});
