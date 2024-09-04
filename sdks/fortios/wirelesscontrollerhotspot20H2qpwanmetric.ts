// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Wirelesscontrollerhotspot20H2qpwanmetric extends pulumi.CustomResource {
    /**
     * Get an existing Wirelesscontrollerhotspot20H2qpwanmetric resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Wirelesscontrollerhotspot20H2qpwanmetricState, opts?: pulumi.CustomResourceOptions): Wirelesscontrollerhotspot20H2qpwanmetric {
        return new Wirelesscontrollerhotspot20H2qpwanmetric(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/wirelesscontrollerhotspot20H2qpwanmetric:Wirelesscontrollerhotspot20H2qpwanmetric';

    /**
     * Returns true if the given object is an instance of Wirelesscontrollerhotspot20H2qpwanmetric.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Wirelesscontrollerhotspot20H2qpwanmetric {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Wirelesscontrollerhotspot20H2qpwanmetric.__pulumiType;
    }

    public readonly downlinkLoad!: pulumi.Output<number>;
    public readonly downlinkSpeed!: pulumi.Output<number>;
    public readonly linkAtCapacity!: pulumi.Output<string>;
    public readonly linkStatus!: pulumi.Output<string>;
    public readonly loadMeasurementDuration!: pulumi.Output<number>;
    public readonly name!: pulumi.Output<string>;
    public readonly symmetricWanLink!: pulumi.Output<string>;
    public readonly uplinkLoad!: pulumi.Output<number>;
    public readonly uplinkSpeed!: pulumi.Output<number>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a Wirelesscontrollerhotspot20H2qpwanmetric resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Wirelesscontrollerhotspot20H2qpwanmetricArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Wirelesscontrollerhotspot20H2qpwanmetricArgs | Wirelesscontrollerhotspot20H2qpwanmetricState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Wirelesscontrollerhotspot20H2qpwanmetricState | undefined;
            resourceInputs["downlinkLoad"] = state ? state.downlinkLoad : undefined;
            resourceInputs["downlinkSpeed"] = state ? state.downlinkSpeed : undefined;
            resourceInputs["linkAtCapacity"] = state ? state.linkAtCapacity : undefined;
            resourceInputs["linkStatus"] = state ? state.linkStatus : undefined;
            resourceInputs["loadMeasurementDuration"] = state ? state.loadMeasurementDuration : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["symmetricWanLink"] = state ? state.symmetricWanLink : undefined;
            resourceInputs["uplinkLoad"] = state ? state.uplinkLoad : undefined;
            resourceInputs["uplinkSpeed"] = state ? state.uplinkSpeed : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as Wirelesscontrollerhotspot20H2qpwanmetricArgs | undefined;
            resourceInputs["downlinkLoad"] = args ? args.downlinkLoad : undefined;
            resourceInputs["downlinkSpeed"] = args ? args.downlinkSpeed : undefined;
            resourceInputs["linkAtCapacity"] = args ? args.linkAtCapacity : undefined;
            resourceInputs["linkStatus"] = args ? args.linkStatus : undefined;
            resourceInputs["loadMeasurementDuration"] = args ? args.loadMeasurementDuration : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["symmetricWanLink"] = args ? args.symmetricWanLink : undefined;
            resourceInputs["uplinkLoad"] = args ? args.uplinkLoad : undefined;
            resourceInputs["uplinkSpeed"] = args ? args.uplinkSpeed : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Wirelesscontrollerhotspot20H2qpwanmetric.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Wirelesscontrollerhotspot20H2qpwanmetric resources.
 */
export interface Wirelesscontrollerhotspot20H2qpwanmetricState {
    downlinkLoad?: pulumi.Input<number>;
    downlinkSpeed?: pulumi.Input<number>;
    linkAtCapacity?: pulumi.Input<string>;
    linkStatus?: pulumi.Input<string>;
    loadMeasurementDuration?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    symmetricWanLink?: pulumi.Input<string>;
    uplinkLoad?: pulumi.Input<number>;
    uplinkSpeed?: pulumi.Input<number>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Wirelesscontrollerhotspot20H2qpwanmetric resource.
 */
export interface Wirelesscontrollerhotspot20H2qpwanmetricArgs {
    downlinkLoad?: pulumi.Input<number>;
    downlinkSpeed?: pulumi.Input<number>;
    linkAtCapacity?: pulumi.Input<string>;
    linkStatus?: pulumi.Input<string>;
    loadMeasurementDuration?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    symmetricWanLink?: pulumi.Input<string>;
    uplinkLoad?: pulumi.Input<number>;
    uplinkSpeed?: pulumi.Input<number>;
    vdomparam?: pulumi.Input<string>;
}
