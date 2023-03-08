import { getStateStatus } from './getStateStatus.js';

export const renderStateIndicator = (size: number) => {
  const stateStatus = getStateStatus(size);

  if (document.getElementById('indicatorWindow')) {
    const stateInfoSize = document.getElementById('stateInfoSize');
    const stateInfoCricle = document.getElementById('stateInfoCricle');
    const stateInfoMessage = document.getElementById('stateInfoMessage');

    stateInfoSize.textContent = `${size} kb`;
    stateInfoMessage.textContent = stateStatus;
    stateInfoCricle.style.borderLeftColor =
      stateStatus === 'lightest' || stateStatus === 'light'
        ? 'green'
        : stateStatus === 'medium'
        ? 'yellow'
        : 'red';
    stateInfoCricle.style.borderBottomColor =
      stateStatus === 'light'
        ? 'green'
        : stateStatus === 'medium'
        ? 'yellow'
        : stateStatus === 'lightest'
        ? ''
        : 'red';
    stateInfoCricle.style.borderRightColor =
      stateStatus === 'medium'
        ? 'yellow'
        : stateStatus === 'large'
        ? 'red'
        : '';

    stateInfoCricle.style.borderTopColor = stateStatus === 'large' ? 'red' : '';
  } else {
    const indicatorWindow = document.createElement('div');
    indicatorWindow.id = 'indicatorWindow';
    indicatorWindow.style.width = '250px';
    indicatorWindow.style.height = '150px';
    indicatorWindow.style.padding = '20px';
    indicatorWindow.style.boxSizing = 'border-box';
    indicatorWindow.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    indicatorWindow.style.display = 'flex';
    indicatorWindow.style.alignItems = 'center';
    indicatorWindow.style.justifyContent = 'space-between';
    indicatorWindow.style.position = 'absolute';
    indicatorWindow.style.right = '5px';
    indicatorWindow.style.bottom = '5px';

    const stateInfoCricle = document.createElement('div');
    stateInfoCricle.id = 'stateInfoCricle';
    stateInfoCricle.style.width = '70px';
    stateInfoCricle.style.height = '70px';
    stateInfoCricle.style.borderRadius = '50%';
    stateInfoCricle.style.borderWidth = '10px';
    stateInfoCricle.style.borderStyle = 'solid';
    stateInfoCricle.style.borderColor = 'inherit';
    stateInfoCricle.style.transform = 'rotate(45deg)';
    stateInfoCricle.style.display = 'flex';
    stateInfoCricle.style.alignItems = 'center';
    stateInfoCricle.style.justifyContent = 'center';
    indicatorWindow.append(stateInfoCricle);

    const stateInfoSize = document.createElement('div');
    stateInfoSize.id = 'stateInfoSize';
    stateInfoSize.style.transform = 'rotate(-45deg)';
    stateInfoSize.style.color = '#fff';
    stateInfoSize.textContent = `${size} kb`;
    stateInfoCricle.append(stateInfoSize);

    const stateInfo = document.createElement('div');
    stateInfo.classList.add('stateInfo');
    indicatorWindow.append(stateInfo);

    const stateInfoMessageTitle = document.createElement('div');
    stateInfoMessageTitle.style.color = '#fff';
    stateInfoMessageTitle.style.fontSize = '1.3em';
    stateInfoMessageTitle.classList.add('stateInfoMessageTitle');
    stateInfoMessageTitle.textContent = 'State status:';
    stateInfo.append(stateInfoMessageTitle);

    const stateInfoMessage = document.createElement('div');
    stateInfoMessage.id = 'stateInfoMessage';
    stateInfoMessage.style.color = '#fff';
    stateInfoMessage.style.fontSize = '1.3em';
    stateInfoMessage.classList.add('stateInfoMessage');
    stateInfo.append(stateInfoMessage);

    stateInfoMessage.textContent = stateStatus;
    stateInfoCricle.style.borderLeftColor =
      stateStatus === 'lightest' || stateStatus === 'light'
        ? 'green'
        : stateStatus === 'medium'
        ? 'yellow'
        : 'red';
    stateInfoCricle.style.borderBottomColor =
      stateStatus === 'light'
        ? 'green'
        : stateStatus === 'medium'
        ? 'yellow'
        : stateStatus === 'lightest'
        ? ''
        : 'red';
    stateInfoCricle.style.borderRightColor =
      stateStatus === 'medium'
        ? 'yellow'
        : stateStatus === 'large'
        ? 'red'
        : '';

    stateInfoCricle.style.borderTopColor = stateStatus === 'large' ? 'red' : '';
    document.body.append(indicatorWindow);
  }
};
