// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PnpDevice extends pulumi.CustomResource {
    /**
     * Get an existing PnpDevice resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PnpDeviceState, opts?: pulumi.CustomResourceOptions): PnpDevice {
        return new PnpDevice(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'catalystcenter:index/pnpDevice:PnpDevice';

    /**
     * Returns true if the given object is an instance of PnpDevice.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PnpDevice {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PnpDevice.__pulumiType;
    }

    /**
     * Device hostname
     */
    public readonly hostname!: pulumi.Output<string>;
    /**
     * Device product ID
     */
    public readonly pid!: pulumi.Output<string>;
    /**
     * Device serial number
     */
    public readonly serialNumber!: pulumi.Output<string>;
    /**
     * Device is a stacked switch
     */
    public readonly stack!: pulumi.Output<boolean | undefined>;

    /**
     * Create a PnpDevice resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PnpDeviceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PnpDeviceArgs | PnpDeviceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PnpDeviceState | undefined;
            resourceInputs["hostname"] = state ? state.hostname : undefined;
            resourceInputs["pid"] = state ? state.pid : undefined;
            resourceInputs["serialNumber"] = state ? state.serialNumber : undefined;
            resourceInputs["stack"] = state ? state.stack : undefined;
        } else {
            const args = argsOrState as PnpDeviceArgs | undefined;
            if ((!args || args.hostname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostname'");
            }
            if ((!args || args.pid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pid'");
            }
            if ((!args || args.serialNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serialNumber'");
            }
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["pid"] = args ? args.pid : undefined;
            resourceInputs["serialNumber"] = args ? args.serialNumber : undefined;
            resourceInputs["stack"] = args ? args.stack : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PnpDevice.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PnpDevice resources.
 */
export interface PnpDeviceState {
    /**
     * Device hostname
     */
    hostname?: pulumi.Input<string>;
    /**
     * Device product ID
     */
    pid?: pulumi.Input<string>;
    /**
     * Device serial number
     */
    serialNumber?: pulumi.Input<string>;
    /**
     * Device is a stacked switch
     */
    stack?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a PnpDevice resource.
 */
export interface PnpDeviceArgs {
    /**
     * Device hostname
     */
    hostname: pulumi.Input<string>;
    /**
     * Device product ID
     */
    pid: pulumi.Input<string>;
    /**
     * Device serial number
     */
    serialNumber: pulumi.Input<string>;
    /**
     * Device is a stacked switch
     */
    stack?: pulumi.Input<boolean>;
}
