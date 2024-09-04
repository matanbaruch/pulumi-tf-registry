// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RouterOspf extends pulumi.CustomResource {
    /**
     * Get an existing RouterOspf resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterOspfState, opts?: pulumi.CustomResourceOptions): RouterOspf {
        return new RouterOspf(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/routerOspf:RouterOspf';

    /**
     * Returns true if the given object is an instance of RouterOspf.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterOspf {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterOspf.__pulumiType;
    }

    public readonly areaLists!: pulumi.Output<outputs.RouterOspfAreaList[] | undefined>;
    /**
     * Use reference bandwidth method to assign OSPF cost (The reference bandwidth in terms of Mbits per second)
     */
    public readonly autoCostReferenceBandwidth!: pulumi.Output<number | undefined>;
    /**
     * Enable BFD on all interfaces
     */
    public readonly bfdAllInterfaces!: pulumi.Output<number | undefined>;
    public readonly defaultInformation!: pulumi.Output<outputs.RouterOspfDefaultInformation | undefined>;
    /**
     * Set metric of redistributed routes (Default metric)
     */
    public readonly defaultMetric!: pulumi.Output<number | undefined>;
    public readonly distance!: pulumi.Output<outputs.RouterOspfDistance | undefined>;
    public readonly distributeInternalLists!: pulumi.Output<outputs.RouterOspfDistributeInternalList[] | undefined>;
    public readonly distributeLists!: pulumi.Output<outputs.RouterOspfDistributeList[] | undefined>;
    /**
     * external LSA equivalance check
     */
    public readonly externLsaEquivalenceCheck!: pulumi.Output<number | undefined>;
    public readonly haStandbyExtraCosts!: pulumi.Output<outputs.RouterOspfHaStandbyExtraCost[] | undefined>;
    public readonly hostLists!: pulumi.Output<outputs.RouterOspfHostList[] | undefined>;
    public readonly logAdjacencyChangesCfg!: pulumi.Output<outputs.RouterOspfLogAdjacencyChangesCfg | undefined>;
    /**
     * Maximum number allowed to process DD concurrently (Number of DD process)
     */
    public readonly maxConcurrentDd!: pulumi.Output<number | undefined>;
    /**
     * Maximum number of non-backbone areas (OSPF area limit)
     */
    public readonly maximumArea!: pulumi.Output<number | undefined>;
    public readonly neighborLists!: pulumi.Output<outputs.RouterOspfNeighborList[] | undefined>;
    public readonly networkLists!: pulumi.Output<outputs.RouterOspfNetworkList[] | undefined>;
    public readonly ospf1!: pulumi.Output<outputs.RouterOspfOspf1 | undefined>;
    public readonly overflow!: pulumi.Output<outputs.RouterOspfOverflow | undefined>;
    public readonly passiveInterface!: pulumi.Output<outputs.RouterOspfPassiveInterface | undefined>;
    /**
     * OSPF process ID
     */
    public readonly processId!: pulumi.Output<number>;
    public readonly redistribute!: pulumi.Output<outputs.RouterOspfRedistribute | undefined>;
    /**
     * Compatible with RFC 1583
     */
    public readonly rfc1583Compatible!: pulumi.Output<number | undefined>;
    public readonly routerId!: pulumi.Output<outputs.RouterOspfRouterId | undefined>;
    public readonly summaryAddressLists!: pulumi.Output<outputs.RouterOspfSummaryAddressList[] | undefined>;
    public readonly timers!: pulumi.Output<outputs.RouterOspfTimers | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a RouterOspf resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouterOspfArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterOspfArgs | RouterOspfState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterOspfState | undefined;
            resourceInputs["areaLists"] = state ? state.areaLists : undefined;
            resourceInputs["autoCostReferenceBandwidth"] = state ? state.autoCostReferenceBandwidth : undefined;
            resourceInputs["bfdAllInterfaces"] = state ? state.bfdAllInterfaces : undefined;
            resourceInputs["defaultInformation"] = state ? state.defaultInformation : undefined;
            resourceInputs["defaultMetric"] = state ? state.defaultMetric : undefined;
            resourceInputs["distance"] = state ? state.distance : undefined;
            resourceInputs["distributeInternalLists"] = state ? state.distributeInternalLists : undefined;
            resourceInputs["distributeLists"] = state ? state.distributeLists : undefined;
            resourceInputs["externLsaEquivalenceCheck"] = state ? state.externLsaEquivalenceCheck : undefined;
            resourceInputs["haStandbyExtraCosts"] = state ? state.haStandbyExtraCosts : undefined;
            resourceInputs["hostLists"] = state ? state.hostLists : undefined;
            resourceInputs["logAdjacencyChangesCfg"] = state ? state.logAdjacencyChangesCfg : undefined;
            resourceInputs["maxConcurrentDd"] = state ? state.maxConcurrentDd : undefined;
            resourceInputs["maximumArea"] = state ? state.maximumArea : undefined;
            resourceInputs["neighborLists"] = state ? state.neighborLists : undefined;
            resourceInputs["networkLists"] = state ? state.networkLists : undefined;
            resourceInputs["ospf1"] = state ? state.ospf1 : undefined;
            resourceInputs["overflow"] = state ? state.overflow : undefined;
            resourceInputs["passiveInterface"] = state ? state.passiveInterface : undefined;
            resourceInputs["processId"] = state ? state.processId : undefined;
            resourceInputs["redistribute"] = state ? state.redistribute : undefined;
            resourceInputs["rfc1583Compatible"] = state ? state.rfc1583Compatible : undefined;
            resourceInputs["routerId"] = state ? state.routerId : undefined;
            resourceInputs["summaryAddressLists"] = state ? state.summaryAddressLists : undefined;
            resourceInputs["timers"] = state ? state.timers : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as RouterOspfArgs | undefined;
            if ((!args || args.processId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'processId'");
            }
            resourceInputs["areaLists"] = args ? args.areaLists : undefined;
            resourceInputs["autoCostReferenceBandwidth"] = args ? args.autoCostReferenceBandwidth : undefined;
            resourceInputs["bfdAllInterfaces"] = args ? args.bfdAllInterfaces : undefined;
            resourceInputs["defaultInformation"] = args ? args.defaultInformation : undefined;
            resourceInputs["defaultMetric"] = args ? args.defaultMetric : undefined;
            resourceInputs["distance"] = args ? args.distance : undefined;
            resourceInputs["distributeInternalLists"] = args ? args.distributeInternalLists : undefined;
            resourceInputs["distributeLists"] = args ? args.distributeLists : undefined;
            resourceInputs["externLsaEquivalenceCheck"] = args ? args.externLsaEquivalenceCheck : undefined;
            resourceInputs["haStandbyExtraCosts"] = args ? args.haStandbyExtraCosts : undefined;
            resourceInputs["hostLists"] = args ? args.hostLists : undefined;
            resourceInputs["logAdjacencyChangesCfg"] = args ? args.logAdjacencyChangesCfg : undefined;
            resourceInputs["maxConcurrentDd"] = args ? args.maxConcurrentDd : undefined;
            resourceInputs["maximumArea"] = args ? args.maximumArea : undefined;
            resourceInputs["neighborLists"] = args ? args.neighborLists : undefined;
            resourceInputs["networkLists"] = args ? args.networkLists : undefined;
            resourceInputs["ospf1"] = args ? args.ospf1 : undefined;
            resourceInputs["overflow"] = args ? args.overflow : undefined;
            resourceInputs["passiveInterface"] = args ? args.passiveInterface : undefined;
            resourceInputs["processId"] = args ? args.processId : undefined;
            resourceInputs["redistribute"] = args ? args.redistribute : undefined;
            resourceInputs["rfc1583Compatible"] = args ? args.rfc1583Compatible : undefined;
            resourceInputs["routerId"] = args ? args.routerId : undefined;
            resourceInputs["summaryAddressLists"] = args ? args.summaryAddressLists : undefined;
            resourceInputs["timers"] = args ? args.timers : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterOspf.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterOspf resources.
 */
export interface RouterOspfState {
    areaLists?: pulumi.Input<pulumi.Input<inputs.RouterOspfAreaList>[]>;
    /**
     * Use reference bandwidth method to assign OSPF cost (The reference bandwidth in terms of Mbits per second)
     */
    autoCostReferenceBandwidth?: pulumi.Input<number>;
    /**
     * Enable BFD on all interfaces
     */
    bfdAllInterfaces?: pulumi.Input<number>;
    defaultInformation?: pulumi.Input<inputs.RouterOspfDefaultInformation>;
    /**
     * Set metric of redistributed routes (Default metric)
     */
    defaultMetric?: pulumi.Input<number>;
    distance?: pulumi.Input<inputs.RouterOspfDistance>;
    distributeInternalLists?: pulumi.Input<pulumi.Input<inputs.RouterOspfDistributeInternalList>[]>;
    distributeLists?: pulumi.Input<pulumi.Input<inputs.RouterOspfDistributeList>[]>;
    /**
     * external LSA equivalance check
     */
    externLsaEquivalenceCheck?: pulumi.Input<number>;
    haStandbyExtraCosts?: pulumi.Input<pulumi.Input<inputs.RouterOspfHaStandbyExtraCost>[]>;
    hostLists?: pulumi.Input<pulumi.Input<inputs.RouterOspfHostList>[]>;
    logAdjacencyChangesCfg?: pulumi.Input<inputs.RouterOspfLogAdjacencyChangesCfg>;
    /**
     * Maximum number allowed to process DD concurrently (Number of DD process)
     */
    maxConcurrentDd?: pulumi.Input<number>;
    /**
     * Maximum number of non-backbone areas (OSPF area limit)
     */
    maximumArea?: pulumi.Input<number>;
    neighborLists?: pulumi.Input<pulumi.Input<inputs.RouterOspfNeighborList>[]>;
    networkLists?: pulumi.Input<pulumi.Input<inputs.RouterOspfNetworkList>[]>;
    ospf1?: pulumi.Input<inputs.RouterOspfOspf1>;
    overflow?: pulumi.Input<inputs.RouterOspfOverflow>;
    passiveInterface?: pulumi.Input<inputs.RouterOspfPassiveInterface>;
    /**
     * OSPF process ID
     */
    processId?: pulumi.Input<number>;
    redistribute?: pulumi.Input<inputs.RouterOspfRedistribute>;
    /**
     * Compatible with RFC 1583
     */
    rfc1583Compatible?: pulumi.Input<number>;
    routerId?: pulumi.Input<inputs.RouterOspfRouterId>;
    summaryAddressLists?: pulumi.Input<pulumi.Input<inputs.RouterOspfSummaryAddressList>[]>;
    timers?: pulumi.Input<inputs.RouterOspfTimers>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouterOspf resource.
 */
export interface RouterOspfArgs {
    areaLists?: pulumi.Input<pulumi.Input<inputs.RouterOspfAreaList>[]>;
    /**
     * Use reference bandwidth method to assign OSPF cost (The reference bandwidth in terms of Mbits per second)
     */
    autoCostReferenceBandwidth?: pulumi.Input<number>;
    /**
     * Enable BFD on all interfaces
     */
    bfdAllInterfaces?: pulumi.Input<number>;
    defaultInformation?: pulumi.Input<inputs.RouterOspfDefaultInformation>;
    /**
     * Set metric of redistributed routes (Default metric)
     */
    defaultMetric?: pulumi.Input<number>;
    distance?: pulumi.Input<inputs.RouterOspfDistance>;
    distributeInternalLists?: pulumi.Input<pulumi.Input<inputs.RouterOspfDistributeInternalList>[]>;
    distributeLists?: pulumi.Input<pulumi.Input<inputs.RouterOspfDistributeList>[]>;
    /**
     * external LSA equivalance check
     */
    externLsaEquivalenceCheck?: pulumi.Input<number>;
    haStandbyExtraCosts?: pulumi.Input<pulumi.Input<inputs.RouterOspfHaStandbyExtraCost>[]>;
    hostLists?: pulumi.Input<pulumi.Input<inputs.RouterOspfHostList>[]>;
    logAdjacencyChangesCfg?: pulumi.Input<inputs.RouterOspfLogAdjacencyChangesCfg>;
    /**
     * Maximum number allowed to process DD concurrently (Number of DD process)
     */
    maxConcurrentDd?: pulumi.Input<number>;
    /**
     * Maximum number of non-backbone areas (OSPF area limit)
     */
    maximumArea?: pulumi.Input<number>;
    neighborLists?: pulumi.Input<pulumi.Input<inputs.RouterOspfNeighborList>[]>;
    networkLists?: pulumi.Input<pulumi.Input<inputs.RouterOspfNetworkList>[]>;
    ospf1?: pulumi.Input<inputs.RouterOspfOspf1>;
    overflow?: pulumi.Input<inputs.RouterOspfOverflow>;
    passiveInterface?: pulumi.Input<inputs.RouterOspfPassiveInterface>;
    /**
     * OSPF process ID
     */
    processId: pulumi.Input<number>;
    redistribute?: pulumi.Input<inputs.RouterOspfRedistribute>;
    /**
     * Compatible with RFC 1583
     */
    rfc1583Compatible?: pulumi.Input<number>;
    routerId?: pulumi.Input<inputs.RouterOspfRouterId>;
    summaryAddressLists?: pulumi.Input<pulumi.Input<inputs.RouterOspfSummaryAddressList>[]>;
    timers?: pulumi.Input<inputs.RouterOspfTimers>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
