import { db } from '../firebase';

export function LandingPage() {
  var starCountRef = db.ref('users/');
  starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    return ' ';
  });
}
