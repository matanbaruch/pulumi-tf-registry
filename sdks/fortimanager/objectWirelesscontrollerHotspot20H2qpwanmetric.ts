// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectWirelesscontrollerHotspot20H2qpwanmetric extends pulumi.CustomResource {
    /**
     * Get an existing ObjectWirelesscontrollerHotspot20H2qpwanmetric resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectWirelesscontrollerHotspot20H2qpwanmetricState, opts?: pulumi.CustomResourceOptions): ObjectWirelesscontrollerHotspot20H2qpwanmetric {
        return new ObjectWirelesscontrollerHotspot20H2qpwanmetric(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectWirelesscontrollerHotspot20H2qpwanmetric:ObjectWirelesscontrollerHotspot20H2qpwanmetric';

    /**
     * Returns true if the given object is an instance of ObjectWirelesscontrollerHotspot20H2qpwanmetric.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectWirelesscontrollerHotspot20H2qpwanmetric {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectWirelesscontrollerHotspot20H2qpwanmetric.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly downlinkLoad!: pulumi.Output<number | undefined>;
    public readonly downlinkSpeed!: pulumi.Output<number>;
    public readonly linkAtCapacity!: pulumi.Output<string>;
    public readonly linkStatus!: pulumi.Output<string>;
    public readonly loadMeasurementDuration!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly symmetricWanLink!: pulumi.Output<string>;
    public readonly uplinkLoad!: pulumi.Output<number | undefined>;
    public readonly uplinkSpeed!: pulumi.Output<number>;

    /**
     * Create a ObjectWirelesscontrollerHotspot20H2qpwanmetric resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectWirelesscontrollerHotspot20H2qpwanmetricArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectWirelesscontrollerHotspot20H2qpwanmetricArgs | ObjectWirelesscontrollerHotspot20H2qpwanmetricState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectWirelesscontrollerHotspot20H2qpwanmetricState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["downlinkLoad"] = state ? state.downlinkLoad : undefined;
            resourceInputs["downlinkSpeed"] = state ? state.downlinkSpeed : undefined;
            resourceInputs["linkAtCapacity"] = state ? state.linkAtCapacity : undefined;
            resourceInputs["linkStatus"] = state ? state.linkStatus : undefined;
            resourceInputs["loadMeasurementDuration"] = state ? state.loadMeasurementDuration : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["symmetricWanLink"] = state ? state.symmetricWanLink : undefined;
            resourceInputs["uplinkLoad"] = state ? state.uplinkLoad : undefined;
            resourceInputs["uplinkSpeed"] = state ? state.uplinkSpeed : undefined;
        } else {
            const args = argsOrState as ObjectWirelesscontrollerHotspot20H2qpwanmetricArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["downlinkLoad"] = args ? args.downlinkLoad : undefined;
            resourceInputs["downlinkSpeed"] = args ? args.downlinkSpeed : undefined;
            resourceInputs["linkAtCapacity"] = args ? args.linkAtCapacity : undefined;
            resourceInputs["linkStatus"] = args ? args.linkStatus : undefined;
            resourceInputs["loadMeasurementDuration"] = args ? args.loadMeasurementDuration : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["symmetricWanLink"] = args ? args.symmetricWanLink : undefined;
            resourceInputs["uplinkLoad"] = args ? args.uplinkLoad : undefined;
            resourceInputs["uplinkSpeed"] = args ? args.uplinkSpeed : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectWirelesscontrollerHotspot20H2qpwanmetric.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectWirelesscontrollerHotspot20H2qpwanmetric resources.
 */
export interface ObjectWirelesscontrollerHotspot20H2qpwanmetricState {
    adom?: pulumi.Input<string>;
    downlinkLoad?: pulumi.Input<number>;
    downlinkSpeed?: pulumi.Input<number>;
    linkAtCapacity?: pulumi.Input<string>;
    linkStatus?: pulumi.Input<string>;
    loadMeasurementDuration?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    symmetricWanLink?: pulumi.Input<string>;
    uplinkLoad?: pulumi.Input<number>;
    uplinkSpeed?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ObjectWirelesscontrollerHotspot20H2qpwanmetric resource.
 */
export interface ObjectWirelesscontrollerHotspot20H2qpwanmetricArgs {
    adom?: pulumi.Input<string>;
    downlinkLoad?: pulumi.Input<number>;
    downlinkSpeed?: pulumi.Input<number>;
    linkAtCapacity?: pulumi.Input<string>;
    linkStatus?: pulumi.Input<string>;
    loadMeasurementDuration?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    symmetricWanLink?: pulumi.Input<string>;
    uplinkLoad?: pulumi.Input<number>;
    uplinkSpeed?: pulumi.Input<number>;
}
