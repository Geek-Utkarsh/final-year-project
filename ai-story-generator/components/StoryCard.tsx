import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";

type Props = {
  title: string;
  content: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onDownloadTxt?: () => void;
  onDownloadMd?: () => void;
};

export default function StoryCard({ title, content, onEdit, onDelete, onDownloadTxt, onDownloadMd }: Props) {
  return (
    <Card className="w-full">
      <CardHeader className="justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex gap-2">
          {onEdit && <Button size="sm" variant="flat" onPress={onEdit}>Edit</Button>}
          {onDelete && <Button size="sm" color="danger" variant="flat" onPress={onDelete}>Delete</Button>}
        </div>
      </CardHeader>
      <CardBody>
        <pre className="whitespace-pre-wrap text-sm">{content}</pre>
      </CardBody>
      <CardFooter className="justify-end gap-2">
        {onDownloadTxt && <Button size="sm" variant="bordered" onPress={onDownloadTxt}>.txt</Button>}
        {onDownloadMd && <Button size="sm" variant="bordered" onPress={onDownloadMd}>.md</Button>}
      </CardFooter>
    </Card>
  );
}
