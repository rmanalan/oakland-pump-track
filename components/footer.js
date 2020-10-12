import { Instagram, Facebook } from 'react-feather';

export default function Footer() {
  return (
    <footer className="bg-gray-800 mt-2 px-5 py-20 mx-auto text-center text-gray-600 text-lg">
      <div className="mb-10">
        <ul>
          <li className="inline mx-5 text-gray-600">
            <a
              className="hover:text-white"
              href="https://instagram.com/OaklandPumpTrack"
            >
              <Instagram className="inline"/> Instagram
            </a>
          </li>
          <li className="inline mx-5 text-gray-600">
            <a
              className="hover:text-white"
              href="https://facebook.com/OaklandPumpTrack"
            >
              <Facebook className="inline"/> Facebook
            </a>
          </li>
        </ul>
      </div>
      <div>
        Copyright © 2020 Oakland Pump Track
        <br />
        Oakland, California
      </div>
    </footer>
  );
}
