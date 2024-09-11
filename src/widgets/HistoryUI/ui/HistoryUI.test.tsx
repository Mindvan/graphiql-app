import { describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithWrappers } from '@/shared/lib/tests/withWrappers';
import { HistoryUI } from './HistoryUI';

describe('HistoryUI component', () => {
  const arr = [
    {
      date: '10.09.2024',
      url: 'http//',
      method: 'GET',
      headers: {
        page: '2',
        country: 'poland',
      },
      body: 'anybody',
      searchParams: {
        find: 'some',
      },
    },
    {
      date: '11.09.2024',
      url: 'http//two',
      method: 'GRAPHQL',
      headers: {
        page: '1',
        country: 'turkey',
      },
      body: 'anybody2',
      searchParams: {
        find: 'some2',
      },
    },
  ];

  test('Table renders', async () => {
    await renderWithWrappers(<HistoryUI elements={arr} />);

    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Method')).toBeInTheDocument();
    expect(screen.getByText('URL')).toBeInTheDocument();
  });
  test('History "Date" renders', async () => {
    await renderWithWrappers(<HistoryUI elements={arr} />);

    expect(screen.getByText('10.09.2024')).toBeInTheDocument();
    expect(screen.getByText('11.09.2024')).toBeInTheDocument();
  });
  test('History "Method" renders', async () => {
    await renderWithWrappers(<HistoryUI elements={arr} />);

    expect(screen.getByText('GET')).toBeInTheDocument();
    expect(screen.getByText('GRAPHQL')).toBeInTheDocument();
  });
  test('History "URL" renders', async () => {
    await renderWithWrappers(<HistoryUI elements={arr} />);

    expect(screen.getByText('http//')).toBeInTheDocument();
    expect(screen.getByText('http//two')).toBeInTheDocument();
  });
  test('Link must have a URL', async () => {
    await renderWithWrappers(<HistoryUI elements={arr} />);

    expect(screen.getByRole('link', { name: 'http//' })).toHaveAttribute('href', '/rest');
    expect(screen.getByRole('link', { name: 'http//two' })).toHaveAttribute('href', '/graphiql');
  });
});
