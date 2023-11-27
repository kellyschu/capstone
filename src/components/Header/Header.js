// import React, { useState, useEffect } from 'react';
// import './Header.scss';
// import axios from 'axios';
// import '@material-design-icons/font/sharp.css'

// function Header() {


//     return (
//         <div className='header'>
//             <h1>Welcome back, {selectedUser}!</h1>
//             <div className="header__user-id">
//                 <span class="material-icons-sharp">people_alt</span>
//                 <select className="dropdown" onChange={handleSelectUser} onBlur={handleFilterUsers}>
//                     <option value="">Select User</option>
//                     {users.map(user => (
//                         <option key={user.id} value={user.first_name}>
//                             {user.first_name} {user.last_name}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//         </div>
//     );
// }

// export default Header;