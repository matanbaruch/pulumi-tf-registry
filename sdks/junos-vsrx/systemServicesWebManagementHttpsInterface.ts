// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemServicesWebManagementHttpsInterface extends pulumi.CustomResource {
    /**
     * Get an existing SystemServicesWebManagementHttpsInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemServicesWebManagementHttpsInterfaceState, opts?: pulumi.CustomResourceOptions): SystemServicesWebManagementHttpsInterface {
        return new SystemServicesWebManagementHttpsInterface(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'junos-vsrx:index/systemServicesWebManagementHttpsInterface:SystemServicesWebManagementHttpsInterface';

    /**
     * Returns true if the given object is an instance of SystemServicesWebManagementHttpsInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemServicesWebManagementHttpsInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemServicesWebManagementHttpsInterface.__pulumiType;
    }

    /**
     * xpath is: config.Groups.V_https. Interfaces that accept HTTPS access
     */
    public readonly interface!: pulumi.Output<string | undefined>;
    public readonly resourceName!: pulumi.Output<string>;

    /**
     * Create a SystemServicesWebManagementHttpsInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemServicesWebManagementHttpsInterfaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemServicesWebManagementHttpsInterfaceArgs | SystemServicesWebManagementHttpsInterfaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemServicesWebManagementHttpsInterfaceState | undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["resourceName"] = state ? state.resourceName : undefined;
        } else {
            const args = argsOrState as SystemServicesWebManagementHttpsInterfaceArgs | undefined;
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemServicesWebManagementHttpsInterface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemServicesWebManagementHttpsInterface resources.
 */
export interface SystemServicesWebManagementHttpsInterfaceState {
    /**
     * xpath is: config.Groups.V_https. Interfaces that accept HTTPS access
     */
    interface?: pulumi.Input<string>;
    resourceName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemServicesWebManagementHttpsInterface resource.
 */
export interface SystemServicesWebManagementHttpsInterfaceArgs {
    /**
     * xpath is: config.Groups.V_https. Interfaces that accept HTTPS access
     */
    interface?: pulumi.Input<string>;
    resourceName: pulumi.Input<string>;
}
