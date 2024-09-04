// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RouterOspfVrf extends pulumi.CustomResource {
    /**
     * Get an existing RouterOspfVrf resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterOspfVrfState, opts?: pulumi.CustomResourceOptions): RouterOspfVrf {
        return new RouterOspfVrf(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxr:index/routerOspfVrf:RouterOspfVrf';

    /**
     * Returns true if the given object is an instance of RouterOspfVrf.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterOspfVrf {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterOspfVrf.__pulumiType;
    }

    /**
     * Enter the OSPF area configuration submode
     */
    public readonly areas!: pulumi.Output<outputs.RouterOspfVrfArea[] | undefined>;
    /**
     * Assign OSPF cost based on interface type
     */
    public readonly autoCostDisable!: pulumi.Output<boolean | undefined>;
    /**
     * Specify reference bandwidth for OSPF cost computations - Range: `1`-`4294967`
     */
    public readonly autoCostReferenceBandwidth!: pulumi.Output<number | undefined>;
    /**
     * Enable Fast detection
     */
    public readonly bfdFastDetect!: pulumi.Output<boolean | undefined>;
    /**
     * Minimum interval - Range: `3`-`30000`
     */
    public readonly bfdMinimumInterval!: pulumi.Output<number | undefined>;
    /**
     * Detect multiplier - Range: `2`-`50`
     */
    public readonly bfdMultiplier!: pulumi.Output<number | undefined>;
    /**
     * Seconds - Range: `1`-`65535`
     */
    public readonly deadInterval!: pulumi.Output<number | undefined>;
    /**
     * Distribute a default route
     */
    public readonly defaultInformationOriginate!: pulumi.Output<boolean | undefined>;
    /**
     * Always advertise default route
     */
    public readonly defaultInformationOriginateAlways!: pulumi.Output<boolean | undefined>;
    /**
     * OSPF metric type for default routes - Range: `1`-`2`
     */
    public readonly defaultInformationOriginateMetricType!: pulumi.Output<number | undefined>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    public readonly deleteMode!: pulumi.Output<string | undefined>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Time between HELLO packets - Range: `1`-`65535`
     */
    public readonly helloInterval!: pulumi.Output<number | undefined>;
    /**
     * Enable LDP IGP synchronization
     */
    public readonly mplsLdpSync!: pulumi.Output<boolean | undefined>;
    /**
     * Disable ignoring the MTU in DBD packets
     */
    public readonly mtuIgnoreDisable!: pulumi.Output<boolean | undefined>;
    /**
     * Ignores the MTU in DBD packets
     */
    public readonly mtuIgnoreEnable!: pulumi.Output<boolean | undefined>;
    /**
     * Disable passive
     */
    public readonly passiveDisable!: pulumi.Output<boolean | undefined>;
    /**
     * Enable passive
     */
    public readonly passiveEnable!: pulumi.Output<boolean | undefined>;
    /**
     * Router priority - Range: `0`-`255`
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * Name for this OSPF process
     */
    public readonly processName!: pulumi.Output<string>;
    /**
     * bgp as-number
     */
    public readonly redistributeBgps!: pulumi.Output<outputs.RouterOspfVrfRedistributeBgp[] | undefined>;
    /**
     * Connected routes
     */
    public readonly redistributeConnected!: pulumi.Output<boolean | undefined>;
    /**
     * OSPF exterior metric type for redistributed routes - Choices: `1`, `2`
     */
    public readonly redistributeConnectedMetricType!: pulumi.Output<string | undefined>;
    /**
     * Set tag for routes redistributed into OSPF - Range: `0`-`4294967295`
     */
    public readonly redistributeConnectedTag!: pulumi.Output<number | undefined>;
    /**
     * ISO IS-IS
     */
    public readonly redistributeIses!: pulumi.Output<outputs.RouterOspfVrfRedistributeIse[] | undefined>;
    /**
     * Open Shortest Path First (OSPF)
     */
    public readonly redistributeOspfs!: pulumi.Output<outputs.RouterOspfVrfRedistributeOspf[] | undefined>;
    /**
     * Static routes
     */
    public readonly redistributeStatic!: pulumi.Output<boolean | undefined>;
    /**
     * OSPF exterior metric type for redistributed routes - Choices: `1`, `2`
     */
    public readonly redistributeStaticMetricType!: pulumi.Output<string | undefined>;
    /**
     * Set tag for routes redistributed into OSPF - Range: `0`-`4294967295`
     */
    public readonly redistributeStaticTag!: pulumi.Output<number | undefined>;
    /**
     * configure this node
     */
    public readonly routerId!: pulumi.Output<string | undefined>;
    /**
     * Name for this OSPF vrf
     */
    public readonly vrfName!: pulumi.Output<string>;

    /**
     * Create a RouterOspfVrf resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouterOspfVrfArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterOspfVrfArgs | RouterOspfVrfState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterOspfVrfState | undefined;
            resourceInputs["areas"] = state ? state.areas : undefined;
            resourceInputs["autoCostDisable"] = state ? state.autoCostDisable : undefined;
            resourceInputs["autoCostReferenceBandwidth"] = state ? state.autoCostReferenceBandwidth : undefined;
            resourceInputs["bfdFastDetect"] = state ? state.bfdFastDetect : undefined;
            resourceInputs["bfdMinimumInterval"] = state ? state.bfdMinimumInterval : undefined;
            resourceInputs["bfdMultiplier"] = state ? state.bfdMultiplier : undefined;
            resourceInputs["deadInterval"] = state ? state.deadInterval : undefined;
            resourceInputs["defaultInformationOriginate"] = state ? state.defaultInformationOriginate : undefined;
            resourceInputs["defaultInformationOriginateAlways"] = state ? state.defaultInformationOriginateAlways : undefined;
            resourceInputs["defaultInformationOriginateMetricType"] = state ? state.defaultInformationOriginateMetricType : undefined;
            resourceInputs["deleteMode"] = state ? state.deleteMode : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["helloInterval"] = state ? state.helloInterval : undefined;
            resourceInputs["mplsLdpSync"] = state ? state.mplsLdpSync : undefined;
            resourceInputs["mtuIgnoreDisable"] = state ? state.mtuIgnoreDisable : undefined;
            resourceInputs["mtuIgnoreEnable"] = state ? state.mtuIgnoreEnable : undefined;
            resourceInputs["passiveDisable"] = state ? state.passiveDisable : undefined;
            resourceInputs["passiveEnable"] = state ? state.passiveEnable : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["processName"] = state ? state.processName : undefined;
            resourceInputs["redistributeBgps"] = state ? state.redistributeBgps : undefined;
            resourceInputs["redistributeConnected"] = state ? state.redistributeConnected : undefined;
            resourceInputs["redistributeConnectedMetricType"] = state ? state.redistributeConnectedMetricType : undefined;
            resourceInputs["redistributeConnectedTag"] = state ? state.redistributeConnectedTag : undefined;
            resourceInputs["redistributeIses"] = state ? state.redistributeIses : undefined;
            resourceInputs["redistributeOspfs"] = state ? state.redistributeOspfs : undefined;
            resourceInputs["redistributeStatic"] = state ? state.redistributeStatic : undefined;
            resourceInputs["redistributeStaticMetricType"] = state ? state.redistributeStaticMetricType : undefined;
            resourceInputs["redistributeStaticTag"] = state ? state.redistributeStaticTag : undefined;
            resourceInputs["routerId"] = state ? state.routerId : undefined;
            resourceInputs["vrfName"] = state ? state.vrfName : undefined;
        } else {
            const args = argsOrState as RouterOspfVrfArgs | undefined;
            if ((!args || args.processName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'processName'");
            }
            if ((!args || args.vrfName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vrfName'");
            }
            resourceInputs["areas"] = args ? args.areas : undefined;
            resourceInputs["autoCostDisable"] = args ? args.autoCostDisable : undefined;
            resourceInputs["autoCostReferenceBandwidth"] = args ? args.autoCostReferenceBandwidth : undefined;
            resourceInputs["bfdFastDetect"] = args ? args.bfdFastDetect : undefined;
            resourceInputs["bfdMinimumInterval"] = args ? args.bfdMinimumInterval : undefined;
            resourceInputs["bfdMultiplier"] = args ? args.bfdMultiplier : undefined;
            resourceInputs["deadInterval"] = args ? args.deadInterval : undefined;
            resourceInputs["defaultInformationOriginate"] = args ? args.defaultInformationOriginate : undefined;
            resourceInputs["defaultInformationOriginateAlways"] = args ? args.defaultInformationOriginateAlways : undefined;
            resourceInputs["defaultInformationOriginateMetricType"] = args ? args.defaultInformationOriginateMetricType : undefined;
            resourceInputs["deleteMode"] = args ? args.deleteMode : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["helloInterval"] = args ? args.helloInterval : undefined;
            resourceInputs["mplsLdpSync"] = args ? args.mplsLdpSync : undefined;
            resourceInputs["mtuIgnoreDisable"] = args ? args.mtuIgnoreDisable : undefined;
            resourceInputs["mtuIgnoreEnable"] = args ? args.mtuIgnoreEnable : undefined;
            resourceInputs["passiveDisable"] = args ? args.passiveDisable : undefined;
            resourceInputs["passiveEnable"] = args ? args.passiveEnable : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["processName"] = args ? args.processName : undefined;
            resourceInputs["redistributeBgps"] = args ? args.redistributeBgps : undefined;
            resourceInputs["redistributeConnected"] = args ? args.redistributeConnected : undefined;
            resourceInputs["redistributeConnectedMetricType"] = args ? args.redistributeConnectedMetricType : undefined;
            resourceInputs["redistributeConnectedTag"] = args ? args.redistributeConnectedTag : undefined;
            resourceInputs["redistributeIses"] = args ? args.redistributeIses : undefined;
            resourceInputs["redistributeOspfs"] = args ? args.redistributeOspfs : undefined;
            resourceInputs["redistributeStatic"] = args ? args.redistributeStatic : undefined;
            resourceInputs["redistributeStaticMetricType"] = args ? args.redistributeStaticMetricType : undefined;
            resourceInputs["redistributeStaticTag"] = args ? args.redistributeStaticTag : undefined;
            resourceInputs["routerId"] = args ? args.routerId : undefined;
            resourceInputs["vrfName"] = args ? args.vrfName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterOspfVrf.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterOspfVrf resources.
 */
export interface RouterOspfVrfState {
    /**
     * Enter the OSPF area configuration submode
     */
    areas?: pulumi.Input<pulumi.Input<inputs.RouterOspfVrfArea>[]>;
    /**
     * Assign OSPF cost based on interface type
     */
    autoCostDisable?: pulumi.Input<boolean>;
    /**
     * Specify reference bandwidth for OSPF cost computations - Range: `1`-`4294967`
     */
    autoCostReferenceBandwidth?: pulumi.Input<number>;
    /**
     * Enable Fast detection
     */
    bfdFastDetect?: pulumi.Input<boolean>;
    /**
     * Minimum interval - Range: `3`-`30000`
     */
    bfdMinimumInterval?: pulumi.Input<number>;
    /**
     * Detect multiplier - Range: `2`-`50`
     */
    bfdMultiplier?: pulumi.Input<number>;
    /**
     * Seconds - Range: `1`-`65535`
     */
    deadInterval?: pulumi.Input<number>;
    /**
     * Distribute a default route
     */
    defaultInformationOriginate?: pulumi.Input<boolean>;
    /**
     * Always advertise default route
     */
    defaultInformationOriginateAlways?: pulumi.Input<boolean>;
    /**
     * OSPF metric type for default routes - Range: `1`-`2`
     */
    defaultInformationOriginateMetricType?: pulumi.Input<number>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Time between HELLO packets - Range: `1`-`65535`
     */
    helloInterval?: pulumi.Input<number>;
    /**
     * Enable LDP IGP synchronization
     */
    mplsLdpSync?: pulumi.Input<boolean>;
    /**
     * Disable ignoring the MTU in DBD packets
     */
    mtuIgnoreDisable?: pulumi.Input<boolean>;
    /**
     * Ignores the MTU in DBD packets
     */
    mtuIgnoreEnable?: pulumi.Input<boolean>;
    /**
     * Disable passive
     */
    passiveDisable?: pulumi.Input<boolean>;
    /**
     * Enable passive
     */
    passiveEnable?: pulumi.Input<boolean>;
    /**
     * Router priority - Range: `0`-`255`
     */
    priority?: pulumi.Input<number>;
    /**
     * Name for this OSPF process
     */
    processName?: pulumi.Input<string>;
    /**
     * bgp as-number
     */
    redistributeBgps?: pulumi.Input<pulumi.Input<inputs.RouterOspfVrfRedistributeBgp>[]>;
    /**
     * Connected routes
     */
    redistributeConnected?: pulumi.Input<boolean>;
    /**
     * OSPF exterior metric type for redistributed routes - Choices: `1`, `2`
     */
    redistributeConnectedMetricType?: pulumi.Input<string>;
    /**
     * Set tag for routes redistributed into OSPF - Range: `0`-`4294967295`
     */
    redistributeConnectedTag?: pulumi.Input<number>;
    /**
     * ISO IS-IS
     */
    redistributeIses?: pulumi.Input<pulumi.Input<inputs.RouterOspfVrfRedistributeIse>[]>;
    /**
     * Open Shortest Path First (OSPF)
     */
    redistributeOspfs?: pulumi.Input<pulumi.Input<inputs.RouterOspfVrfRedistributeOspf>[]>;
    /**
     * Static routes
     */
    redistributeStatic?: pulumi.Input<boolean>;
    /**
     * OSPF exterior metric type for redistributed routes - Choices: `1`, `2`
     */
    redistributeStaticMetricType?: pulumi.Input<string>;
    /**
     * Set tag for routes redistributed into OSPF - Range: `0`-`4294967295`
     */
    redistributeStaticTag?: pulumi.Input<number>;
    /**
     * configure this node
     */
    routerId?: pulumi.Input<string>;
    /**
     * Name for this OSPF vrf
     */
    vrfName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouterOspfVrf resource.
 */
export interface RouterOspfVrfArgs {
    /**
     * Enter the OSPF area configuration submode
     */
    areas?: pulumi.Input<pulumi.Input<inputs.RouterOspfVrfArea>[]>;
    /**
     * Assign OSPF cost based on interface type
     */
    autoCostDisable?: pulumi.Input<boolean>;
    /**
     * Specify reference bandwidth for OSPF cost computations - Range: `1`-`4294967`
     */
    autoCostReferenceBandwidth?: pulumi.Input<number>;
    /**
     * Enable Fast detection
     */
    bfdFastDetect?: pulumi.Input<boolean>;
    /**
     * Minimum interval - Range: `3`-`30000`
     */
    bfdMinimumInterval?: pulumi.Input<number>;
    /**
     * Detect multiplier - Range: `2`-`50`
     */
    bfdMultiplier?: pulumi.Input<number>;
    /**
     * Seconds - Range: `1`-`65535`
     */
    deadInterval?: pulumi.Input<number>;
    /**
     * Distribute a default route
     */
    defaultInformationOriginate?: pulumi.Input<boolean>;
    /**
     * Always advertise default route
     */
    defaultInformationOriginateAlways?: pulumi.Input<boolean>;
    /**
     * OSPF metric type for default routes - Range: `1`-`2`
     */
    defaultInformationOriginateMetricType?: pulumi.Input<number>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Time between HELLO packets - Range: `1`-`65535`
     */
    helloInterval?: pulumi.Input<number>;
    /**
     * Enable LDP IGP synchronization
     */
    mplsLdpSync?: pulumi.Input<boolean>;
    /**
     * Disable ignoring the MTU in DBD packets
     */
    mtuIgnoreDisable?: pulumi.Input<boolean>;
    /**
     * Ignores the MTU in DBD packets
     */
    mtuIgnoreEnable?: pulumi.Input<boolean>;
    /**
     * Disable passive
     */
    passiveDisable?: pulumi.Input<boolean>;
    /**
     * Enable passive
     */
    passiveEnable?: pulumi.Input<boolean>;
    /**
     * Router priority - Range: `0`-`255`
     */
    priority?: pulumi.Input<number>;
    /**
     * Name for this OSPF process
     */
    processName: pulumi.Input<string>;
    /**
     * bgp as-number
     */
    redistributeBgps?: pulumi.Input<pulumi.Input<inputs.RouterOspfVrfRedistributeBgp>[]>;
    /**
     * Connected routes
     */
    redistributeConnected?: pulumi.Input<boolean>;
    /**
     * OSPF exterior metric type for redistributed routes - Choices: `1`, `2`
     */
    redistributeConnectedMetricType?: pulumi.Input<string>;
    /**
     * Set tag for routes redistributed into OSPF - Range: `0`-`4294967295`
     */
    redistributeConnectedTag?: pulumi.Input<number>;
    /**
     * ISO IS-IS
     */
    redistributeIses?: pulumi.Input<pulumi.Input<inputs.RouterOspfVrfRedistributeIse>[]>;
    /**
     * Open Shortest Path First (OSPF)
     */
    redistributeOspfs?: pulumi.Input<pulumi.Input<inputs.RouterOspfVrfRedistributeOspf>[]>;
    /**
     * Static routes
     */
    redistributeStatic?: pulumi.Input<boolean>;
    /**
     * OSPF exterior metric type for redistributed routes - Choices: `1`, `2`
     */
    redistributeStaticMetricType?: pulumi.Input<string>;
    /**
     * Set tag for routes redistributed into OSPF - Range: `0`-`4294967295`
     */
    redistributeStaticTag?: pulumi.Input<number>;
    /**
     * configure this node
     */
    routerId?: pulumi.Input<string>;
    /**
     * Name for this OSPF vrf
     */
    vrfName: pulumi.Input<string>;
}
