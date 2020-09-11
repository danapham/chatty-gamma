import data from '../helpers/data/messageData';
import display from './displayMessages';

const emptyInput = () => {
  $('#newMessage').val('');
};

const addMessage = () => {
  $('#newMessage').keypress((e) => {
    if (e.keyCode === 13) {
      const newMessage = {
        id: data.idGenerator(),
        user: 'Ron Swanson',
        time: 'Jan 1, 2020 1:32pm',
        text: $('#newMessage').val(),
      };
      data.getMessages().push(newMessage);
      console.warn(data.getMessages());
      $('#messageDisplay').html('');
      display.displayMessages(data.getMessages());
      emptyInput();
    }
  });
};

export default { addMessage };
