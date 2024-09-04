// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectWirelesscontrollerQosprofile extends pulumi.CustomResource {
    /**
     * Get an existing ObjectWirelesscontrollerQosprofile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectWirelesscontrollerQosprofileState, opts?: pulumi.CustomResourceOptions): ObjectWirelesscontrollerQosprofile {
        return new ObjectWirelesscontrollerQosprofile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectWirelesscontrollerQosprofile:ObjectWirelesscontrollerQosprofile';

    /**
     * Returns true if the given object is an instance of ObjectWirelesscontrollerQosprofile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectWirelesscontrollerQosprofile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectWirelesscontrollerQosprofile.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly bandwidthAdmissionControl!: pulumi.Output<string | undefined>;
    public readonly bandwidthCapacity!: pulumi.Output<number | undefined>;
    public readonly burst!: pulumi.Output<string>;
    public readonly callAdmissionControl!: pulumi.Output<string>;
    public readonly callCapacity!: pulumi.Output<number | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly downlink!: pulumi.Output<number | undefined>;
    public readonly downlinkSta!: pulumi.Output<number | undefined>;
    public readonly dscpWmmBes!: pulumi.Output<number[]>;
    public readonly dscpWmmBks!: pulumi.Output<number[]>;
    public readonly dscpWmmMapping!: pulumi.Output<string>;
    public readonly dscpWmmVis!: pulumi.Output<number[]>;
    public readonly dscpWmmVos!: pulumi.Output<number[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly uplink!: pulumi.Output<number | undefined>;
    public readonly uplinkSta!: pulumi.Output<number | undefined>;
    public readonly wmm!: pulumi.Output<string>;
    public readonly wmmBeDscp!: pulumi.Output<number>;
    public readonly wmmBkDscp!: pulumi.Output<number>;
    public readonly wmmDscpMarking!: pulumi.Output<string>;
    public readonly wmmUapsd!: pulumi.Output<string>;
    public readonly wmmViDscp!: pulumi.Output<number>;
    public readonly wmmVoDscp!: pulumi.Output<number>;

    /**
     * Create a ObjectWirelesscontrollerQosprofile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectWirelesscontrollerQosprofileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectWirelesscontrollerQosprofileArgs | ObjectWirelesscontrollerQosprofileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectWirelesscontrollerQosprofileState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["bandwidthAdmissionControl"] = state ? state.bandwidthAdmissionControl : undefined;
            resourceInputs["bandwidthCapacity"] = state ? state.bandwidthCapacity : undefined;
            resourceInputs["burst"] = state ? state.burst : undefined;
            resourceInputs["callAdmissionControl"] = state ? state.callAdmissionControl : undefined;
            resourceInputs["callCapacity"] = state ? state.callCapacity : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["downlink"] = state ? state.downlink : undefined;
            resourceInputs["downlinkSta"] = state ? state.downlinkSta : undefined;
            resourceInputs["dscpWmmBes"] = state ? state.dscpWmmBes : undefined;
            resourceInputs["dscpWmmBks"] = state ? state.dscpWmmBks : undefined;
            resourceInputs["dscpWmmMapping"] = state ? state.dscpWmmMapping : undefined;
            resourceInputs["dscpWmmVis"] = state ? state.dscpWmmVis : undefined;
            resourceInputs["dscpWmmVos"] = state ? state.dscpWmmVos : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["uplink"] = state ? state.uplink : undefined;
            resourceInputs["uplinkSta"] = state ? state.uplinkSta : undefined;
            resourceInputs["wmm"] = state ? state.wmm : undefined;
            resourceInputs["wmmBeDscp"] = state ? state.wmmBeDscp : undefined;
            resourceInputs["wmmBkDscp"] = state ? state.wmmBkDscp : undefined;
            resourceInputs["wmmDscpMarking"] = state ? state.wmmDscpMarking : undefined;
            resourceInputs["wmmUapsd"] = state ? state.wmmUapsd : undefined;
            resourceInputs["wmmViDscp"] = state ? state.wmmViDscp : undefined;
            resourceInputs["wmmVoDscp"] = state ? state.wmmVoDscp : undefined;
        } else {
            const args = argsOrState as ObjectWirelesscontrollerQosprofileArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["bandwidthAdmissionControl"] = args ? args.bandwidthAdmissionControl : undefined;
            resourceInputs["bandwidthCapacity"] = args ? args.bandwidthCapacity : undefined;
            resourceInputs["burst"] = args ? args.burst : undefined;
            resourceInputs["callAdmissionControl"] = args ? args.callAdmissionControl : undefined;
            resourceInputs["callCapacity"] = args ? args.callCapacity : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["downlink"] = args ? args.downlink : undefined;
            resourceInputs["downlinkSta"] = args ? args.downlinkSta : undefined;
            resourceInputs["dscpWmmBes"] = args ? args.dscpWmmBes : undefined;
            resourceInputs["dscpWmmBks"] = args ? args.dscpWmmBks : undefined;
            resourceInputs["dscpWmmMapping"] = args ? args.dscpWmmMapping : undefined;
            resourceInputs["dscpWmmVis"] = args ? args.dscpWmmVis : undefined;
            resourceInputs["dscpWmmVos"] = args ? args.dscpWmmVos : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["uplink"] = args ? args.uplink : undefined;
            resourceInputs["uplinkSta"] = args ? args.uplinkSta : undefined;
            resourceInputs["wmm"] = args ? args.wmm : undefined;
            resourceInputs["wmmBeDscp"] = args ? args.wmmBeDscp : undefined;
            resourceInputs["wmmBkDscp"] = args ? args.wmmBkDscp : undefined;
            resourceInputs["wmmDscpMarking"] = args ? args.wmmDscpMarking : undefined;
            resourceInputs["wmmUapsd"] = args ? args.wmmUapsd : undefined;
            resourceInputs["wmmViDscp"] = args ? args.wmmViDscp : undefined;
            resourceInputs["wmmVoDscp"] = args ? args.wmmVoDscp : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectWirelesscontrollerQosprofile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectWirelesscontrollerQosprofile resources.
 */
export interface ObjectWirelesscontrollerQosprofileState {
    adom?: pulumi.Input<string>;
    bandwidthAdmissionControl?: pulumi.Input<string>;
    bandwidthCapacity?: pulumi.Input<number>;
    burst?: pulumi.Input<string>;
    callAdmissionControl?: pulumi.Input<string>;
    callCapacity?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    downlink?: pulumi.Input<number>;
    downlinkSta?: pulumi.Input<number>;
    dscpWmmBes?: pulumi.Input<pulumi.Input<number>[]>;
    dscpWmmBks?: pulumi.Input<pulumi.Input<number>[]>;
    dscpWmmMapping?: pulumi.Input<string>;
    dscpWmmVis?: pulumi.Input<pulumi.Input<number>[]>;
    dscpWmmVos?: pulumi.Input<pulumi.Input<number>[]>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    uplink?: pulumi.Input<number>;
    uplinkSta?: pulumi.Input<number>;
    wmm?: pulumi.Input<string>;
    wmmBeDscp?: pulumi.Input<number>;
    wmmBkDscp?: pulumi.Input<number>;
    wmmDscpMarking?: pulumi.Input<string>;
    wmmUapsd?: pulumi.Input<string>;
    wmmViDscp?: pulumi.Input<number>;
    wmmVoDscp?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ObjectWirelesscontrollerQosprofile resource.
 */
export interface ObjectWirelesscontrollerQosprofileArgs {
    adom?: pulumi.Input<string>;
    bandwidthAdmissionControl?: pulumi.Input<string>;
    bandwidthCapacity?: pulumi.Input<number>;
    burst?: pulumi.Input<string>;
    callAdmissionControl?: pulumi.Input<string>;
    callCapacity?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    downlink?: pulumi.Input<number>;
    downlinkSta?: pulumi.Input<number>;
    dscpWmmBes?: pulumi.Input<pulumi.Input<number>[]>;
    dscpWmmBks?: pulumi.Input<pulumi.Input<number>[]>;
    dscpWmmMapping?: pulumi.Input<string>;
    dscpWmmVis?: pulumi.Input<pulumi.Input<number>[]>;
    dscpWmmVos?: pulumi.Input<pulumi.Input<number>[]>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    uplink?: pulumi.Input<number>;
    uplinkSta?: pulumi.Input<number>;
    wmm?: pulumi.Input<string>;
    wmmBeDscp?: pulumi.Input<number>;
    wmmBkDscp?: pulumi.Input<number>;
    wmmDscpMarking?: pulumi.Input<string>;
    wmmUapsd?: pulumi.Input<string>;
    wmmViDscp?: pulumi.Input<number>;
    wmmVoDscp?: pulumi.Input<number>;
}
