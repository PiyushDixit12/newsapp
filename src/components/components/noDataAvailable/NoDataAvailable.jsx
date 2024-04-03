import noData from '../../../assets/noDataAvailable.avif'
export const NoDataAvailable = () => {
    return (
        <div className=' w-full max-h-lvh flex justify-center items-center'>
            <img src={noData} className=' w-auto' alt="No Data available" />
        </div>
    )
}
