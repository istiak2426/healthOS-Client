import Layout from '../Layout';
import { Link } from 'react-router-dom';
import { userInfo } from '../../utils/auth';

const Dashboard = () => {
    const { name, email, role } = userInfo();
    const UserLinks = () => {
        return (
            <div className="card">
               
            </div>
        )
    };

    const PurchaseHistory = () => (
        <div className="card mb-5">
            <h3 className="card-header">Purchase History</h3>
            <ul className="list-group">
                <li className="list-group-item">History</li>
            </ul>
        </div>
    );

    const UserInfo = () => (
        <div className="card mb-5">
            <h3 className="card-header">User Information</h3>
            <ul className="list-group">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{role}</li>
            </ul>
        </div>
    );

    return (
        <div  className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <UserLinks />
                </div>
                <div className="col-sm-9">
                    <UserInfo />
                    <PurchaseHistory />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;