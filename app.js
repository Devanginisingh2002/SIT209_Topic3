$('#navbar').load('navbar.html');
const devices = JSON.parse(localStorage.getItem('devices')) || [];



devices.forEach(function(device) {
  $('#devices tbody').append(`
    <tr>
      <td>${device.user}</td>
      <td>${device.name}</td>
      <td>${device.email}</td>
    </tr>`
  );
});



$('#add-device').on('click', function() {
  const user = $('#user').val();
  const name = $('#name').val();
  const email = $('#email').val();
  devices.push({ user, name, email });
  localStorage.setItem('devices', JSON.stringify(devices));
  location.href = '/';
});