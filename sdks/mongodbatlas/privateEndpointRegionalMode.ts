// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PrivateEndpointRegionalMode extends pulumi.CustomResource {
    /**
     * Get an existing PrivateEndpointRegionalMode resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivateEndpointRegionalModeState, opts?: pulumi.CustomResourceOptions): PrivateEndpointRegionalMode {
        return new PrivateEndpointRegionalMode(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mongodbatlas:index/privateEndpointRegionalMode:PrivateEndpointRegionalMode';

    /**
     * Returns true if the given object is an instance of PrivateEndpointRegionalMode.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateEndpointRegionalMode {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateEndpointRegionalMode.__pulumiType;
    }

    public readonly enabled!: pulumi.Output<boolean>;
    public readonly projectId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.PrivateEndpointRegionalModeTimeouts | undefined>;

    /**
     * Create a PrivateEndpointRegionalMode resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateEndpointRegionalModeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PrivateEndpointRegionalModeArgs | PrivateEndpointRegionalModeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PrivateEndpointRegionalModeState | undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as PrivateEndpointRegionalModeArgs | undefined;
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PrivateEndpointRegionalMode.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PrivateEndpointRegionalMode resources.
 */
export interface PrivateEndpointRegionalModeState {
    enabled?: pulumi.Input<boolean>;
    projectId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PrivateEndpointRegionalModeTimeouts>;
}

/**
 * The set of arguments for constructing a PrivateEndpointRegionalMode resource.
 */
export interface PrivateEndpointRegionalModeArgs {
    enabled?: pulumi.Input<boolean>;
    projectId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PrivateEndpointRegionalModeTimeouts>;
}
