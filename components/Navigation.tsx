// components/Navigation.tsx
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/employees">
            <a>Employee Data</a>
          </Link>
        </li>
        <li>
          <Link href="/employee/edit">
            <a>Create/Edit Employee</a>
          </Link>
        </li>
        <li>
          <Link href="/departments">
            <a>Department Data</a>
          </Link>
        </li>
        <li>
          <Link href="/department/edit">
            <a>Create/Edit Department</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
