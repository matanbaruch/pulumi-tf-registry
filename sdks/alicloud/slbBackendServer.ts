// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SlbBackendServer extends pulumi.CustomResource {
    /**
     * Get an existing SlbBackendServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlbBackendServerState, opts?: pulumi.CustomResourceOptions): SlbBackendServer {
        return new SlbBackendServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/slbBackendServer:SlbBackendServer';

    /**
     * Returns true if the given object is an instance of SlbBackendServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SlbBackendServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SlbBackendServer.__pulumiType;
    }

    public readonly backendServers!: pulumi.Output<outputs.SlbBackendServerBackendServer[] | undefined>;
    public readonly deleteProtectionValidation!: pulumi.Output<boolean | undefined>;
    public readonly loadBalancerId!: pulumi.Output<string>;

    /**
     * Create a SlbBackendServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SlbBackendServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SlbBackendServerArgs | SlbBackendServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SlbBackendServerState | undefined;
            resourceInputs["backendServers"] = state ? state.backendServers : undefined;
            resourceInputs["deleteProtectionValidation"] = state ? state.deleteProtectionValidation : undefined;
            resourceInputs["loadBalancerId"] = state ? state.loadBalancerId : undefined;
        } else {
            const args = argsOrState as SlbBackendServerArgs | undefined;
            if ((!args || args.loadBalancerId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loadBalancerId'");
            }
            resourceInputs["backendServers"] = args ? args.backendServers : undefined;
            resourceInputs["deleteProtectionValidation"] = args ? args.deleteProtectionValidation : undefined;
            resourceInputs["loadBalancerId"] = args ? args.loadBalancerId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SlbBackendServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SlbBackendServer resources.
 */
export interface SlbBackendServerState {
    backendServers?: pulumi.Input<pulumi.Input<inputs.SlbBackendServerBackendServer>[]>;
    deleteProtectionValidation?: pulumi.Input<boolean>;
    loadBalancerId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SlbBackendServer resource.
 */
export interface SlbBackendServerArgs {
    backendServers?: pulumi.Input<pulumi.Input<inputs.SlbBackendServerBackendServer>[]>;
    deleteProtectionValidation?: pulumi.Input<boolean>;
    loadBalancerId: pulumi.Input<string>;
}
