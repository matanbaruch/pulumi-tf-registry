// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RouterStatic6 extends pulumi.CustomResource {
    /**
     * Get an existing RouterStatic6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterStatic6State, opts?: pulumi.CustomResourceOptions): RouterStatic6 {
        return new RouterStatic6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/routerStatic6:RouterStatic6';

    /**
     * Returns true if the given object is an instance of RouterStatic6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterStatic6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterStatic6.__pulumiType;
    }

    public readonly bfd!: pulumi.Output<string>;
    public readonly blackhole!: pulumi.Output<string>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly devices!: pulumi.Output<string[]>;
    public readonly devindex!: pulumi.Output<number | undefined>;
    public readonly distance!: pulumi.Output<number>;
    public readonly dst!: pulumi.Output<string>;
    public readonly dstaddrs!: pulumi.Output<string[]>;
    public readonly dynamicGateway!: pulumi.Output<string>;
    public readonly gateway!: pulumi.Output<string | undefined>;
    public readonly linkMonitorExempt!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number>;
    public readonly sdwan!: pulumi.Output<string>;
    public readonly sdwanZones!: pulumi.Output<string[]>;
    public readonly seqNum!: pulumi.Output<number>;
    public readonly status!: pulumi.Output<string>;
    public readonly virtualWanLink!: pulumi.Output<string | undefined>;
    public readonly vrf!: pulumi.Output<string | undefined>;
    public readonly weight!: pulumi.Output<number | undefined>;

    /**
     * Create a RouterStatic6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RouterStatic6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterStatic6Args | RouterStatic6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterStatic6State | undefined;
            resourceInputs["bfd"] = state ? state.bfd : undefined;
            resourceInputs["blackhole"] = state ? state.blackhole : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["devices"] = state ? state.devices : undefined;
            resourceInputs["devindex"] = state ? state.devindex : undefined;
            resourceInputs["distance"] = state ? state.distance : undefined;
            resourceInputs["dst"] = state ? state.dst : undefined;
            resourceInputs["dstaddrs"] = state ? state.dstaddrs : undefined;
            resourceInputs["dynamicGateway"] = state ? state.dynamicGateway : undefined;
            resourceInputs["gateway"] = state ? state.gateway : undefined;
            resourceInputs["linkMonitorExempt"] = state ? state.linkMonitorExempt : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["sdwan"] = state ? state.sdwan : undefined;
            resourceInputs["sdwanZones"] = state ? state.sdwanZones : undefined;
            resourceInputs["seqNum"] = state ? state.seqNum : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["virtualWanLink"] = state ? state.virtualWanLink : undefined;
            resourceInputs["vrf"] = state ? state.vrf : undefined;
            resourceInputs["weight"] = state ? state.weight : undefined;
        } else {
            const args = argsOrState as RouterStatic6Args | undefined;
            resourceInputs["bfd"] = args ? args.bfd : undefined;
            resourceInputs["blackhole"] = args ? args.blackhole : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["devices"] = args ? args.devices : undefined;
            resourceInputs["devindex"] = args ? args.devindex : undefined;
            resourceInputs["distance"] = args ? args.distance : undefined;
            resourceInputs["dst"] = args ? args.dst : undefined;
            resourceInputs["dstaddrs"] = args ? args.dstaddrs : undefined;
            resourceInputs["dynamicGateway"] = args ? args.dynamicGateway : undefined;
            resourceInputs["gateway"] = args ? args.gateway : undefined;
            resourceInputs["linkMonitorExempt"] = args ? args.linkMonitorExempt : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["sdwan"] = args ? args.sdwan : undefined;
            resourceInputs["sdwanZones"] = args ? args.sdwanZones : undefined;
            resourceInputs["seqNum"] = args ? args.seqNum : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["virtualWanLink"] = args ? args.virtualWanLink : undefined;
            resourceInputs["vrf"] = args ? args.vrf : undefined;
            resourceInputs["weight"] = args ? args.weight : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterStatic6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterStatic6 resources.
 */
export interface RouterStatic6State {
    bfd?: pulumi.Input<string>;
    blackhole?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    devices?: pulumi.Input<pulumi.Input<string>[]>;
    devindex?: pulumi.Input<number>;
    distance?: pulumi.Input<number>;
    dst?: pulumi.Input<string>;
    dstaddrs?: pulumi.Input<pulumi.Input<string>[]>;
    dynamicGateway?: pulumi.Input<string>;
    gateway?: pulumi.Input<string>;
    linkMonitorExempt?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    sdwan?: pulumi.Input<string>;
    sdwanZones?: pulumi.Input<pulumi.Input<string>[]>;
    seqNum?: pulumi.Input<number>;
    status?: pulumi.Input<string>;
    virtualWanLink?: pulumi.Input<string>;
    vrf?: pulumi.Input<string>;
    weight?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a RouterStatic6 resource.
 */
export interface RouterStatic6Args {
    bfd?: pulumi.Input<string>;
    blackhole?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    devices?: pulumi.Input<pulumi.Input<string>[]>;
    devindex?: pulumi.Input<number>;
    distance?: pulumi.Input<number>;
    dst?: pulumi.Input<string>;
    dstaddrs?: pulumi.Input<pulumi.Input<string>[]>;
    dynamicGateway?: pulumi.Input<string>;
    gateway?: pulumi.Input<string>;
    linkMonitorExempt?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    sdwan?: pulumi.Input<string>;
    sdwanZones?: pulumi.Input<pulumi.Input<string>[]>;
    seqNum?: pulumi.Input<number>;
    status?: pulumi.Input<string>;
    virtualWanLink?: pulumi.Input<string>;
    vrf?: pulumi.Input<string>;
    weight?: pulumi.Input<number>;
}
