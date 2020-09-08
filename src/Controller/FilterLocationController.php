<?php

namespace App\Controller;

use App\Pagerfanta\FilterLocationAdapter;
use eZ\Bundle\EzPublishCoreBundle\Controller;
use eZ\Publish\API\Repository\ContentService;
use eZ\Publish\API\Repository\LocationService;
use eZ\Publish\API\Repository\Values\Content\Query;
use eZ\Publish\API\Repository\Values\Filter\Filter;
use Pagerfanta\Pagerfanta;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use eZ\Publish\API\Repository\Values\Content\Query\Criterion;
use eZ\Publish\API\Repository\Values\Content\Query\SortClause;

class FilterLocationController extends Controller
{
    /**
     * @Route("/example/find/location", name="app_find_location")
     */
    public function findContent(Request $request, LocationService $locationService)
    {
        $rootLocation = $this->getRootLocation();

        $filter = new Filter();
        $filter->withCriterion(new Criterion\ContentTypeIdentifier('ng_article'));
        $filter->andWithCriterion(new Criterion\Subtree($rootLocation->pathString));
        $filter->withSortClause(new SortClause\DatePublished(Query::SORT_DESC));

        $pager = new Pagerfanta(
            new FilterLocationAdapter(
                $filter,
                $locationService
            )
        );

        $pager->setNormalizeOutOfRangePages(true);
        $pager->setMaxPerPage((int) 12);

        $currentPage = $request->query->getInt('page', 1);
        $pager->setCurrentPage($currentPage > 0 ? $currentPage : 1);

        return $this->render('@ezdesign/search/filter_location.html.twig',
            [
                'search_text' => 'Test',
                'pager' => $pager,
            ]
        );
    }
}
