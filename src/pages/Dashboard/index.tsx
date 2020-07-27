import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="github Explorer" />
      <Title>Explore repositories on GitHub</Title>
      <Form>
        <input placeholder="Git user" />
        <button type="submit">Search</button>
      </Form>
      <Repositories>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/53009976?s=460&u=274139a7a8e844d7308622c898361bb30f1850fb&v=4"
            alt="Guilherme"
          />
          <div>
            <strong>guilherme</strong>
            <p>blablabla</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/53009976?s=460&u=274139a7a8e844d7308622c898361bb30f1850fb&v=4"
            alt="Guilherme"
          />
          <div>
            <strong>guilherme</strong>
            <p>blablabla</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
