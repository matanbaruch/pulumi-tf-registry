// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VrackDedicatedServerInterface extends pulumi.CustomResource {
    /**
     * Get an existing VrackDedicatedServerInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VrackDedicatedServerInterfaceState, opts?: pulumi.CustomResourceOptions): VrackDedicatedServerInterface {
        return new VrackDedicatedServerInterface(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ovh:index/vrackDedicatedServerInterface:VrackDedicatedServerInterface';

    /**
     * Returns true if the given object is an instance of VrackDedicatedServerInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VrackDedicatedServerInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VrackDedicatedServerInterface.__pulumiType;
    }

    public readonly interfaceId!: pulumi.Output<string>;
    /**
     * Service name of the vrack resource.
     */
    public readonly serviceName!: pulumi.Output<string>;

    /**
     * Create a VrackDedicatedServerInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VrackDedicatedServerInterfaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VrackDedicatedServerInterfaceArgs | VrackDedicatedServerInterfaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VrackDedicatedServerInterfaceState | undefined;
            resourceInputs["interfaceId"] = state ? state.interfaceId : undefined;
            resourceInputs["serviceName"] = state ? state.serviceName : undefined;
        } else {
            const args = argsOrState as VrackDedicatedServerInterfaceArgs | undefined;
            if ((!args || args.interfaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interfaceId'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["interfaceId"] = args ? args.interfaceId : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VrackDedicatedServerInterface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VrackDedicatedServerInterface resources.
 */
export interface VrackDedicatedServerInterfaceState {
    interfaceId?: pulumi.Input<string>;
    /**
     * Service name of the vrack resource.
     */
    serviceName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VrackDedicatedServerInterface resource.
 */
export interface VrackDedicatedServerInterfaceArgs {
    interfaceId: pulumi.Input<string>;
    /**
     * Service name of the vrack resource.
     */
    serviceName: pulumi.Input<string>;
}
