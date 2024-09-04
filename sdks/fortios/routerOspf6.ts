// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RouterOspf6 extends pulumi.CustomResource {
    /**
     * Get an existing RouterOspf6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterOspf6State, opts?: pulumi.CustomResourceOptions): RouterOspf6 {
        return new RouterOspf6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/routerOspf6:RouterOspf6';

    /**
     * Returns true if the given object is an instance of RouterOspf6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterOspf6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterOspf6.__pulumiType;
    }

    public readonly abrType!: pulumi.Output<string>;
    public readonly areas!: pulumi.Output<outputs.RouterOspf6Area[] | undefined>;
    public readonly autoCostRefBandwidth!: pulumi.Output<number>;
    public readonly bfd!: pulumi.Output<string>;
    public readonly defaultInformationMetric!: pulumi.Output<number>;
    public readonly defaultInformationMetricType!: pulumi.Output<string>;
    public readonly defaultInformationOriginate!: pulumi.Output<string>;
    public readonly defaultInformationRouteMap!: pulumi.Output<string>;
    public readonly defaultMetric!: pulumi.Output<number>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly getAllTables!: pulumi.Output<string | undefined>;
    public readonly logNeighbourChanges!: pulumi.Output<string>;
    public readonly ospf6Interfaces!: pulumi.Output<outputs.RouterOspf6Ospf6Interface[] | undefined>;
    public readonly passiveInterfaces!: pulumi.Output<outputs.RouterOspf6PassiveInterface[] | undefined>;
    public readonly redistributes!: pulumi.Output<outputs.RouterOspf6Redistribute[] | undefined>;
    public readonly restartMode!: pulumi.Output<string>;
    public readonly restartOnTopologyChange!: pulumi.Output<string>;
    public readonly restartPeriod!: pulumi.Output<number>;
    public readonly routerId!: pulumi.Output<string>;
    public readonly spfTimers!: pulumi.Output<string>;
    public readonly summaryAddresses!: pulumi.Output<outputs.RouterOspf6SummaryAddress[] | undefined>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a RouterOspf6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouterOspf6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterOspf6Args | RouterOspf6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterOspf6State | undefined;
            resourceInputs["abrType"] = state ? state.abrType : undefined;
            resourceInputs["areas"] = state ? state.areas : undefined;
            resourceInputs["autoCostRefBandwidth"] = state ? state.autoCostRefBandwidth : undefined;
            resourceInputs["bfd"] = state ? state.bfd : undefined;
            resourceInputs["defaultInformationMetric"] = state ? state.defaultInformationMetric : undefined;
            resourceInputs["defaultInformationMetricType"] = state ? state.defaultInformationMetricType : undefined;
            resourceInputs["defaultInformationOriginate"] = state ? state.defaultInformationOriginate : undefined;
            resourceInputs["defaultInformationRouteMap"] = state ? state.defaultInformationRouteMap : undefined;
            resourceInputs["defaultMetric"] = state ? state.defaultMetric : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["getAllTables"] = state ? state.getAllTables : undefined;
            resourceInputs["logNeighbourChanges"] = state ? state.logNeighbourChanges : undefined;
            resourceInputs["ospf6Interfaces"] = state ? state.ospf6Interfaces : undefined;
            resourceInputs["passiveInterfaces"] = state ? state.passiveInterfaces : undefined;
            resourceInputs["redistributes"] = state ? state.redistributes : undefined;
            resourceInputs["restartMode"] = state ? state.restartMode : undefined;
            resourceInputs["restartOnTopologyChange"] = state ? state.restartOnTopologyChange : undefined;
            resourceInputs["restartPeriod"] = state ? state.restartPeriod : undefined;
            resourceInputs["routerId"] = state ? state.routerId : undefined;
            resourceInputs["spfTimers"] = state ? state.spfTimers : undefined;
            resourceInputs["summaryAddresses"] = state ? state.summaryAddresses : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as RouterOspf6Args | undefined;
            if ((!args || args.routerId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routerId'");
            }
            resourceInputs["abrType"] = args ? args.abrType : undefined;
            resourceInputs["areas"] = args ? args.areas : undefined;
            resourceInputs["autoCostRefBandwidth"] = args ? args.autoCostRefBandwidth : undefined;
            resourceInputs["bfd"] = args ? args.bfd : undefined;
            resourceInputs["defaultInformationMetric"] = args ? args.defaultInformationMetric : undefined;
            resourceInputs["defaultInformationMetricType"] = args ? args.defaultInformationMetricType : undefined;
            resourceInputs["defaultInformationOriginate"] = args ? args.defaultInformationOriginate : undefined;
            resourceInputs["defaultInformationRouteMap"] = args ? args.defaultInformationRouteMap : undefined;
            resourceInputs["defaultMetric"] = args ? args.defaultMetric : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["getAllTables"] = args ? args.getAllTables : undefined;
            resourceInputs["logNeighbourChanges"] = args ? args.logNeighbourChanges : undefined;
            resourceInputs["ospf6Interfaces"] = args ? args.ospf6Interfaces : undefined;
            resourceInputs["passiveInterfaces"] = args ? args.passiveInterfaces : undefined;
            resourceInputs["redistributes"] = args ? args.redistributes : undefined;
            resourceInputs["restartMode"] = args ? args.restartMode : undefined;
            resourceInputs["restartOnTopologyChange"] = args ? args.restartOnTopologyChange : undefined;
            resourceInputs["restartPeriod"] = args ? args.restartPeriod : undefined;
            resourceInputs["routerId"] = args ? args.routerId : undefined;
            resourceInputs["spfTimers"] = args ? args.spfTimers : undefined;
            resourceInputs["summaryAddresses"] = args ? args.summaryAddresses : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterOspf6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterOspf6 resources.
 */
export interface RouterOspf6State {
    abrType?: pulumi.Input<string>;
    areas?: pulumi.Input<pulumi.Input<inputs.RouterOspf6Area>[]>;
    autoCostRefBandwidth?: pulumi.Input<number>;
    bfd?: pulumi.Input<string>;
    defaultInformationMetric?: pulumi.Input<number>;
    defaultInformationMetricType?: pulumi.Input<string>;
    defaultInformationOriginate?: pulumi.Input<string>;
    defaultInformationRouteMap?: pulumi.Input<string>;
    defaultMetric?: pulumi.Input<number>;
    dynamicSortSubtable?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    logNeighbourChanges?: pulumi.Input<string>;
    ospf6Interfaces?: pulumi.Input<pulumi.Input<inputs.RouterOspf6Ospf6Interface>[]>;
    passiveInterfaces?: pulumi.Input<pulumi.Input<inputs.RouterOspf6PassiveInterface>[]>;
    redistributes?: pulumi.Input<pulumi.Input<inputs.RouterOspf6Redistribute>[]>;
    restartMode?: pulumi.Input<string>;
    restartOnTopologyChange?: pulumi.Input<string>;
    restartPeriod?: pulumi.Input<number>;
    routerId?: pulumi.Input<string>;
    spfTimers?: pulumi.Input<string>;
    summaryAddresses?: pulumi.Input<pulumi.Input<inputs.RouterOspf6SummaryAddress>[]>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouterOspf6 resource.
 */
export interface RouterOspf6Args {
    abrType?: pulumi.Input<string>;
    areas?: pulumi.Input<pulumi.Input<inputs.RouterOspf6Area>[]>;
    autoCostRefBandwidth?: pulumi.Input<number>;
    bfd?: pulumi.Input<string>;
    defaultInformationMetric?: pulumi.Input<number>;
    defaultInformationMetricType?: pulumi.Input<string>;
    defaultInformationOriginate?: pulumi.Input<string>;
    defaultInformationRouteMap?: pulumi.Input<string>;
    defaultMetric?: pulumi.Input<number>;
    dynamicSortSubtable?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    logNeighbourChanges?: pulumi.Input<string>;
    ospf6Interfaces?: pulumi.Input<pulumi.Input<inputs.RouterOspf6Ospf6Interface>[]>;
    passiveInterfaces?: pulumi.Input<pulumi.Input<inputs.RouterOspf6PassiveInterface>[]>;
    redistributes?: pulumi.Input<pulumi.Input<inputs.RouterOspf6Redistribute>[]>;
    restartMode?: pulumi.Input<string>;
    restartOnTopologyChange?: pulumi.Input<string>;
    restartPeriod?: pulumi.Input<number>;
    routerId: pulumi.Input<string>;
    spfTimers?: pulumi.Input<string>;
    summaryAddresses?: pulumi.Input<pulumi.Input<inputs.RouterOspf6SummaryAddress>[]>;
    vdomparam?: pulumi.Input<string>;
}
