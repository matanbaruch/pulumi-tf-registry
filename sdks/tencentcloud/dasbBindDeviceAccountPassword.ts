// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DasbBindDeviceAccountPassword extends pulumi.CustomResource {
    /**
     * Get an existing DasbBindDeviceAccountPassword resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DasbBindDeviceAccountPasswordState, opts?: pulumi.CustomResourceOptions): DasbBindDeviceAccountPassword {
        return new DasbBindDeviceAccountPassword(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/dasbBindDeviceAccountPassword:DasbBindDeviceAccountPassword';

    /**
     * Returns true if the given object is an instance of DasbBindDeviceAccountPassword.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DasbBindDeviceAccountPassword {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DasbBindDeviceAccountPassword.__pulumiType;
    }

    /**
     * Host account ID.
     */
    public readonly deviceAccountId!: pulumi.Output<number>;
    /**
     * Host account password.
     */
    public readonly password!: pulumi.Output<string>;

    /**
     * Create a DasbBindDeviceAccountPassword resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DasbBindDeviceAccountPasswordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DasbBindDeviceAccountPasswordArgs | DasbBindDeviceAccountPasswordState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DasbBindDeviceAccountPasswordState | undefined;
            resourceInputs["deviceAccountId"] = state ? state.deviceAccountId : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
        } else {
            const args = argsOrState as DasbBindDeviceAccountPasswordArgs | undefined;
            if ((!args || args.deviceAccountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceAccountId'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            resourceInputs["deviceAccountId"] = args ? args.deviceAccountId : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DasbBindDeviceAccountPassword.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DasbBindDeviceAccountPassword resources.
 */
export interface DasbBindDeviceAccountPasswordState {
    /**
     * Host account ID.
     */
    deviceAccountId?: pulumi.Input<number>;
    /**
     * Host account password.
     */
    password?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DasbBindDeviceAccountPassword resource.
 */
export interface DasbBindDeviceAccountPasswordArgs {
    /**
     * Host account ID.
     */
    deviceAccountId: pulumi.Input<number>;
    /**
     * Host account password.
     */
    password: pulumi.Input<string>;
}
