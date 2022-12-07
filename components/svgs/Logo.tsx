import { FC, SVGAttributes } from 'react'

const Logo: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
	return (
		<svg
			className='text-[#C2C2C2]'
			width='124'
			height='30'
			viewBox='0 0 124 30'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path d='M45.6895 21.2534C46.3587 21.2534 46.832 21.1886 47.1096 21.059C47.3872 20.9294 47.5259 20.6784 47.5259 20.3058C47.5259 20.0145 47.3463 19.7635 46.9873 19.5529C46.628 19.3261 46.0814 19.0751 45.3468 18.8C44.7755 18.5894 44.253 18.3708 43.7797 18.144C43.3228 17.9174 42.9309 17.6503 42.6045 17.3425C42.278 17.0187 42.025 16.6381 41.8456 16.2008C41.666 15.7636 41.5763 15.2373 41.5763 14.6219C41.5763 13.4236 42.025 12.4763 42.9228 11.78C43.8207 11.0836 45.0529 10.7355 46.62 10.7355C47.4035 10.7355 48.1542 10.8083 48.8724 10.9541C49.5906 11.0836 50.1619 11.2294 50.5864 11.3913L49.9499 14.2089C49.5253 14.0633 49.0603 13.9337 48.5541 13.8204C48.0645 13.707 47.5096 13.6503 46.8893 13.6503C45.7467 13.6503 45.1755 13.9661 45.1755 14.5977C45.1755 14.7435 45.1999 14.8729 45.2488 14.9863C45.2978 15.0997 45.3958 15.2131 45.5425 15.3265C45.6895 15.4234 45.8854 15.5368 46.1304 15.6664C46.3914 15.7798 46.718 15.9094 47.1096 16.0552C47.9095 16.3466 48.5705 16.6381 49.093 16.9295C49.6152 17.2049 50.0232 17.5125 50.3171 17.8526C50.6272 18.1764 50.8394 18.5408 50.9537 18.9458C51.0841 19.3505 51.1495 19.8201 51.1495 20.3544C51.1495 21.6175 50.6681 22.573 49.7049 23.2208C48.7583 23.8685 47.4116 24.1923 45.6651 24.1923C44.5226 24.1923 43.5675 24.0953 42.8005 23.9009C42.0496 23.7066 41.5273 23.5446 41.2334 23.4152L41.8456 20.476C42.4659 20.7188 43.1024 20.9132 43.7554 21.059C44.4083 21.1886 45.0529 21.2534 45.6895 21.2534ZM53.8758 23.8523V5.5859L57.524 5.00293V11.1241C57.7689 11.0431 58.0789 10.9703 58.4545 10.9055C58.8461 10.8245 59.2217 10.784 59.5807 10.784C60.6253 10.784 61.4905 10.9298 62.176 11.2213C62.8779 11.4966 63.4329 11.8933 63.8411 12.4115C64.2654 12.9297 64.5591 13.5451 64.7224 14.2575C64.902 14.9701 64.9917 15.7636 64.9917 16.6381V23.8523H61.3435V17.0753C61.3435 15.9094 61.1885 15.0835 60.8785 14.5977C60.5846 14.112 60.0296 13.869 59.2134 13.869C58.8871 13.869 58.5768 13.9013 58.2831 13.9661C58.0056 14.0147 57.7526 14.0714 57.524 14.1362V23.8523H53.8758ZM79.2873 23.4152C78.667 23.5932 77.8672 23.7551 76.8879 23.9009C75.9084 24.0629 74.8802 24.1439 73.8027 24.1439C72.7092 24.1439 71.7952 23.9981 71.0607 23.7066C70.3424 23.4152 69.7712 23.0102 69.3466 22.4921C68.9223 21.9577 68.6203 21.3262 68.4407 20.5974C68.2611 19.8687 68.1714 19.0671 68.1714 18.1926V11.0755H71.8196V17.7554C71.8196 18.9214 71.9746 19.7635 72.2848 20.2816C72.5949 20.7998 73.1744 21.059 74.0233 21.059C74.2843 21.059 74.5619 21.0508 74.8556 21.0346C75.1495 21.0022 75.4107 20.9698 75.6391 20.9374V11.0755H79.2873V23.4152ZM82.5894 7.89349L86.2375 7.31052V11.0755H90.6203V14.0876H86.2375V18.5814C86.2375 19.3423 86.3682 19.9497 86.6294 20.403C86.9068 20.8566 87.4537 21.0832 88.2699 21.0832C88.6615 21.0832 89.0615 21.0508 89.4695 20.986C89.894 20.9052 90.2774 20.7998 90.6203 20.6702L91.1345 23.488C90.6936 23.6662 90.204 23.8199 89.6654 23.9495C89.1268 24.0791 88.4656 24.1439 87.6821 24.1439C86.6865 24.1439 85.8622 24.0143 85.2093 23.7551C84.5564 23.48 84.0339 23.1074 83.6422 22.6378C83.2506 22.1521 82.973 21.5691 82.8097 20.889C82.663 20.2088 82.5894 19.4557 82.5894 18.63V7.89349ZM93.4686 7.89349L97.1167 7.31052V11.0755H101.499V14.0876H97.1167V18.5814C97.1167 19.3423 97.2474 19.9497 97.5086 20.403C97.786 20.8566 98.3329 21.0832 99.1491 21.0832C99.5407 21.0832 99.9407 21.0508 100.349 20.986C100.773 20.9052 101.157 20.7998 101.499 20.6702L102.014 23.488C101.573 23.6662 101.083 23.8199 100.545 23.9495C100.006 24.0791 99.3448 24.1439 98.5615 24.1439C97.5657 24.1439 96.7414 24.0143 96.0885 23.7551C95.4356 23.48 94.9133 23.1074 94.5214 22.6378C94.1298 22.1521 93.8522 21.5691 93.6891 20.889C93.5422 20.2088 93.4686 19.4557 93.4686 18.63V7.89349ZM109.612 24.0953C108.551 24.0791 107.686 23.9657 107.017 23.7551C106.364 23.5446 105.841 23.2532 105.45 22.8806C105.074 22.4921 104.813 22.0305 104.666 21.4961C104.536 20.9456 104.47 20.3302 104.47 19.6501V5.5859L108.119 5.00293V18.9214C108.119 19.2453 108.143 19.5367 108.192 19.7959C108.241 20.0549 108.331 20.2736 108.461 20.4516C108.608 20.6298 108.812 20.7756 109.073 20.889C109.334 21.0022 109.685 21.0752 110.126 21.1076L109.612 24.0953ZM111.605 17.5611C111.605 16.4276 111.777 15.4396 112.119 14.5977C112.479 13.7394 112.944 13.0269 113.515 12.4601C114.086 11.8933 114.739 11.4642 115.474 11.1727C116.224 10.8812 116.992 10.7355 117.775 10.7355C119.603 10.7355 121.048 11.2942 122.109 12.4115C123.17 13.5127 123.7 15.1401 123.7 17.2939C123.7 17.5045 123.692 17.7393 123.676 17.9984C123.66 18.2412 123.643 18.4598 123.627 18.6542H115.351C115.433 19.3991 115.784 19.9901 116.404 20.4274C117.024 20.8646 117.857 21.0832 118.901 21.0832C119.571 21.0832 120.224 21.0266 120.86 20.9132C121.513 20.7836 122.044 20.6298 122.452 20.4516L122.941 23.3908C122.746 23.488 122.484 23.5852 122.158 23.6824C121.831 23.7796 121.464 23.8603 121.056 23.9251C120.664 24.0061 120.24 24.0709 119.783 24.1195C119.326 24.1681 118.869 24.1923 118.412 24.1923C117.253 24.1923 116.241 24.0223 115.376 23.6824C114.527 23.3422 113.817 22.8806 113.246 22.2977C112.691 21.6985 112.274 20.9942 111.997 20.1844C111.736 19.3747 111.605 18.5004 111.605 17.5611ZM120.175 16.1766C120.158 15.8688 120.101 15.5692 120.003 15.2779C119.922 14.9863 119.783 14.7273 119.587 14.5005C119.407 14.2737 119.171 14.0876 118.877 13.9418C118.599 13.7961 118.249 13.7232 117.824 13.7232C117.416 13.7232 117.065 13.7961 116.771 13.9418C116.477 14.0714 116.233 14.2495 116.037 14.4761C115.841 14.7029 115.686 14.9701 115.572 15.2779C115.474 15.5692 115.4 15.8688 115.351 16.1766H120.175Z' />
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M21.5276 0.927734L14.3516 7.9646L7.17585 7.9646L0 15.0013H7.17585L7.17585 22.0375H0V29.0743H7.17585L7.17585 22.0383H14.3516V29.0751L21.5276 22.0383V15.0013L28.7034 7.9646V0.927734H21.5276Z'
			/>
		</svg>
	)
}

export default Logo