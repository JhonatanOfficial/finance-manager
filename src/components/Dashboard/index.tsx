
import { Card } from './Card'

export const Dashboard = () => {
    return (
        <div className='flex justify-center flex-col gap-5'>
            <div className='flex items-center gap-6'>
                <Card />
                <Card />
                <Card />
            </div>
            <div className='flex flex-col justify-center gap-3'>
                <ul>
                    <li>
                        <div>
                            
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
