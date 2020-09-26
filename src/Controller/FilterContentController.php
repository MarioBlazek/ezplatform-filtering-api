<?php

namespace App\Controller;

use eZ\Bundle\EzPublishCoreBundle\Controller;
use eZ\Publish\API\Repository\ContentService;
use eZ\Publish\API\Repository\Values\Content\Query;
use eZ\Publish\API\Repository\Values\Filter\Filter;
use Symfony\Component\Routing\Annotation\Route;
use eZ\Publish\API\Repository\Values\Content\Query\Criterion;
use eZ\Publish\API\Repository\Values\Content\Query\SortClause;

final class FilterContentController extends Controller
{
    /**
     * @Route("/example/filter/content", name="app_filter_content")
     */
    public function findContent(ContentService $contentService)
    {
        $rootLocation = $this->getRootLocation();

        $filter = new Filter();
        $filter->withCriterion(new Criterion\ContentTypeIdentifier('ng_article'));
        $filter->andWithCriterion(new Criterion\Subtree($rootLocation->pathString));
        $filter->andWithCriterion(new Criterion\Location\IsMainLocation(
            Criterion\Location\IsMainLocation::MAIN
            )
        );
        $filter->withSortClause(new SortClause\DatePublished(Query::SORT_DESC));
        $filter->sliceBy(15, 0);

        $results = $contentService->find($filter);

        return $this->render('@ezdesign/search/filter_content.html.twig',
            [
                'results' => $results,
            ]
        );
    }
}
