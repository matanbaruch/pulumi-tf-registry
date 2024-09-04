// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PnpImportDevices extends pulumi.CustomResource {
    /**
     * Get an existing PnpImportDevices resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PnpImportDevicesState, opts?: pulumi.CustomResourceOptions): PnpImportDevices {
        return new PnpImportDevices(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'catalystcenter:index/pnpImportDevices:PnpImportDevices';

    /**
     * Returns true if the given object is an instance of PnpImportDevices.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PnpImportDevices {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PnpImportDevices.__pulumiType;
    }

    /**
     * List of devices to add
     */
    public readonly devices!: pulumi.Output<outputs.PnpImportDevicesDevice[]>;

    /**
     * Create a PnpImportDevices resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PnpImportDevicesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PnpImportDevicesArgs | PnpImportDevicesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PnpImportDevicesState | undefined;
            resourceInputs["devices"] = state ? state.devices : undefined;
        } else {
            const args = argsOrState as PnpImportDevicesArgs | undefined;
            if ((!args || args.devices === undefined) && !opts.urn) {
                throw new Error("Missing required property 'devices'");
            }
            resourceInputs["devices"] = args ? args.devices : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PnpImportDevices.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PnpImportDevices resources.
 */
export interface PnpImportDevicesState {
    /**
     * List of devices to add
     */
    devices?: pulumi.Input<pulumi.Input<inputs.PnpImportDevicesDevice>[]>;
}

/**
 * The set of arguments for constructing a PnpImportDevices resource.
 */
export interface PnpImportDevicesArgs {
    /**
     * List of devices to add
     */
    devices: pulumi.Input<pulumi.Input<inputs.PnpImportDevicesDevice>[]>;
}
