import { OpenGraph } from '../../components/OpenGraph'

export default () => {
  return <div className="h-screen w-screen flex bg-zinc-800">
    <div className="m-auto outline outline-[10px] outline-red-500">
      <OpenGraph title={"A Blog Post Title"}/>
    </div>
  </div>
}
