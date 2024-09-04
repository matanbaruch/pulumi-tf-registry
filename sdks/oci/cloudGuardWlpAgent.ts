// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudGuardWlpAgent extends pulumi.CustomResource {
    /**
     * Get an existing CloudGuardWlpAgent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudGuardWlpAgentState, opts?: pulumi.CustomResourceOptions): CloudGuardWlpAgent {
        return new CloudGuardWlpAgent(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/cloudGuardWlpAgent:CloudGuardWlpAgent';

    /**
     * Returns true if the given object is an instance of CloudGuardWlpAgent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudGuardWlpAgent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudGuardWlpAgent.__pulumiType;
    }

    public readonly agentVersion!: pulumi.Output<string>;
    public /*out*/ readonly certificateId!: pulumi.Output<string>;
    public readonly certificateSignedRequest!: pulumi.Output<string>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly hostId!: pulumi.Output<string>;
    public readonly osInfo!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CloudGuardWlpAgentTimeouts | undefined>;

    /**
     * Create a CloudGuardWlpAgent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudGuardWlpAgentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudGuardWlpAgentArgs | CloudGuardWlpAgentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudGuardWlpAgentState | undefined;
            resourceInputs["agentVersion"] = state ? state.agentVersion : undefined;
            resourceInputs["certificateId"] = state ? state.certificateId : undefined;
            resourceInputs["certificateSignedRequest"] = state ? state.certificateSignedRequest : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["hostId"] = state ? state.hostId : undefined;
            resourceInputs["osInfo"] = state ? state.osInfo : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CloudGuardWlpAgentArgs | undefined;
            if ((!args || args.agentVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agentVersion'");
            }
            if ((!args || args.certificateSignedRequest === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateSignedRequest'");
            }
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.osInfo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'osInfo'");
            }
            resourceInputs["agentVersion"] = args ? args.agentVersion : undefined;
            resourceInputs["certificateSignedRequest"] = args ? args.certificateSignedRequest : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["osInfo"] = args ? args.osInfo : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["certificateId"] = undefined /*out*/;
            resourceInputs["hostId"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudGuardWlpAgent.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudGuardWlpAgent resources.
 */
export interface CloudGuardWlpAgentState {
    agentVersion?: pulumi.Input<string>;
    certificateId?: pulumi.Input<string>;
    certificateSignedRequest?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    hostId?: pulumi.Input<string>;
    osInfo?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tenantId?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CloudGuardWlpAgentTimeouts>;
}

/**
 * The set of arguments for constructing a CloudGuardWlpAgent resource.
 */
export interface CloudGuardWlpAgentArgs {
    agentVersion: pulumi.Input<string>;
    certificateSignedRequest: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    osInfo: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CloudGuardWlpAgentTimeouts>;
}
