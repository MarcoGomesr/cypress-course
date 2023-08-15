import Link from "next/link"

export default function NavItem({label,path,dataTest}){
    return (
        <Link href={path} data-cy={dataTest}>
            {label}
        </Link>
    )
}