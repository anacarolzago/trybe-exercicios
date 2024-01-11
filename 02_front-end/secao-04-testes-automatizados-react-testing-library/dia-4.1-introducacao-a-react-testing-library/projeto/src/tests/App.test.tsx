import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App component test', () => {
  it('Checa se alterna entre temas', async () => {
    const { container } = render(<App />);

    // Acessar
    const div = container.firstChild;
    const btnToggle = screen.getByRole('button', { name: 'toggle-theme' });

    // Aferir 1
    expect(div).toHaveClass('light');

    // Agir
    await userEvent.click(btnToggle);

    // Aferir 2
    expect(div).toHaveClass('dark');
  });
});
