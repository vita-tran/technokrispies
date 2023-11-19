export default function NotifyUser() {
//     <!DOCTYPE html>
// <html lang="en">

// <head>
// 	<meta charset="utf-8">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	<title>PawPals: Honey's Profile</title>

// 	<meta name="author" content="...">
// 	<meta name="description"
// 		content="Discover local cuddly animals in your area with PawPals. Find an animal to love and book time with them today - because the only thing greater than a full-time pet is a part-time pet.">

// 	<!-- Google Fonts -->
// 	<link rel="preconnect" href="https://fonts.googleapis.com">
// 	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// 	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap" rel="stylesheet">

// 	<!-- Stylesheets -->
// 	<link rel="stylesheet" type="text/css" href="css/modern-reset.css">
// 	<link rel="stylesheet" type="text/css" href="css/styles.css">

// 	<!-- Scripts -->
// 	<!-- <script src="js/main.js" defer></script> -->
// 	<style>
// 		body {
// 			font-family: Arial, sans-serif;
// 			text-align: center;
// 			margin-top: 50px;
// 		}

// 		label {
// 			margin-right: 10px;
// 		}

// 		.alarm {
// 			margin-top: 10px;
// 		}

// 		.deleteButton {
// 			cursor: pointer;
// 			color: red;
// 			margin-left: 10px;
// 		}
// 	</style>
// </head>

// <body>

// 	<header>

// 	</header>

// 	<main>

// 		<h1>Add a time when do you want to take your medicine.</h1>

// 		<div>
// 			<label for="timeInput">Set the time:</label>
// 			<input type="time" id="timeInput">

// 			<label for="dayInput">Set the day(s):</label>
// 			<div id="daysOfWeek">
// 				<label><input type="checkbox" id="selectAllDays">Select All</label>
// 				<label><input type="checkbox" value="0">Sun</label>
// 				<label><input type="checkbox" value="1">Mon</label>
// 				<label><input type="checkbox" value="2">Tue</label>
// 				<label><input type="checkbox" value="3">Wed</label>
// 				<label><input type="checkbox" value="4">Thu</label>
// 				<label><input type="checkbox" value="5">Fri</label>
// 				<label><input type="checkbox" value="6">Sat</label>
// 			</div>

// 			<button onclick="addAlarm()">Add Alarm</button>
// 		</div>

// 		<div id="alarms"></div>
// 	</main>
// 	<script>
// 		document.getElementById('selectAllDays').addEventListener('change', function () {
// 			const checkboxes = document.querySelectorAll('#daysOfWeek input[type="checkbox"]');
// 			checkboxes.forEach(checkbox => checkbox.checked = this.checked);
// 		});

// 		function addAlarm() {
// 			const timeInput = document.getElementById('timeInput').value;
// 			const daysOfWeek = Array.from(document.querySelectorAll('#daysOfWeek input:checked')).map(checkbox => checkbox.value);

// 			if (!timeInput || daysOfWeek.length === 0) {
// 				alert('Please set both the time and at least one day.');
// 				return;
// 			}

// 			const alarm = {
// 				time: timeInput,
// 				daysOfWeek: daysOfWeek
// 			};

// 			displayAlarm(alarm);
// 		}

// 		function displayAlarm(alarm) {
// 			const alarmsContainer = document.getElementById('alarms');

// 			const alarmDiv = document.createElement('div');
// 			alarmDiv.className = 'alarm';
// 			alarmDiv.innerHTML = `<p>Time: ${alarm.time}, Days: ${alarm.daysOfWeek.map(day => getDayName(day)).join(', ')}
//     <span class="deleteButton" onclick="deleteAlarm(this)">Delete</span></p>`;
// 			alarmsContainer.appendChild(alarmDiv);


// 			const now = new Date();
// 			const alarmTime = new Date(now);
// 			const [hours, minutes] = alarm.time.split(':');
// 			alarmTime.setHours(hours, minutes, 0, 0);

// 			const today = alarmTime.getDay();
// 			const nextAlarmDay = alarm.daysOfWeek.find(day => day >= today) || alarm.daysOfWeek[0];
// 			const daysUntilNextAlarm = (nextAlarmDay - today + 7) % 7;
// 			alarmTime.setDate(alarmTime.getDate() + daysUntilNextAlarm);

// 			const timeUntilAlarm = alarmTime - now;


// 			if (timeUntilAlarm > 0) {

// 				setTimeout(() => {
// 					notificationMethod(alarm);
// 				}, timeUntilAlarm);
// 			}
// 		}

// 		let notificationMethod = (alarm) => {

// 			Notification.requestPermission().then(perm => {
// 				if (perm === "granted") {
// 					const title = 'Reminder!';
// 					const body = `Time to take a pill! ${alarm.daysOfWeek.map(day => getDayName(day)).join(', ')} at ${alarm.time}`;
// 					const options = {
// 						requireInteraction: true,
// 						data: { alarmData: alarm },
// 						icon: './img/logo.jpg'
// 					};

// 					const notification = new Notification(title, options);

// 					notification.addEventListener("click", () => {
// 						sound.play();
// 						console.log("Notification displayed");
// 					});
// 				}
// 			});
// 		};

// 		function deleteAlarm(button) {
// 			const alarmDiv = button.parentNode;
// 			alarmDiv.parentNode.removeChild(alarmDiv);
// 		}

// 		function getDayName(day) {
// 			const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// 			return days[day];
// 		}

// 	</script>
// </body>

// </html>
}
