import { render } from '@testing-library/react';

import PresentationJobBoardComponentApp from './presentation-job-board-component-app';

describe('PresentationJobBoardComponentApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PresentationJobBoardComponentApp />);
    expect(baseElement).toBeTruthy();
  });
});
