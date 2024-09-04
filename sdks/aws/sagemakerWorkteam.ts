// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SagemakerWorkteam extends pulumi.CustomResource {
    /**
     * Get an existing SagemakerWorkteam resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SagemakerWorkteamState, opts?: pulumi.CustomResourceOptions): SagemakerWorkteam {
        return new SagemakerWorkteam(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/sagemakerWorkteam:SagemakerWorkteam';

    /**
     * Returns true if the given object is an instance of SagemakerWorkteam.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SagemakerWorkteam {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SagemakerWorkteam.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly memberDefinitions!: pulumi.Output<outputs.SagemakerWorkteamMemberDefinition[]>;
    public readonly notificationConfiguration!: pulumi.Output<outputs.SagemakerWorkteamNotificationConfiguration | undefined>;
    public /*out*/ readonly subdomain!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly workerAccessConfiguration!: pulumi.Output<outputs.SagemakerWorkteamWorkerAccessConfiguration | undefined>;
    public readonly workforceName!: pulumi.Output<string>;
    public readonly workteamName!: pulumi.Output<string>;

    /**
     * Create a SagemakerWorkteam resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SagemakerWorkteamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SagemakerWorkteamArgs | SagemakerWorkteamState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SagemakerWorkteamState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["memberDefinitions"] = state ? state.memberDefinitions : undefined;
            resourceInputs["notificationConfiguration"] = state ? state.notificationConfiguration : undefined;
            resourceInputs["subdomain"] = state ? state.subdomain : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["workerAccessConfiguration"] = state ? state.workerAccessConfiguration : undefined;
            resourceInputs["workforceName"] = state ? state.workforceName : undefined;
            resourceInputs["workteamName"] = state ? state.workteamName : undefined;
        } else {
            const args = argsOrState as SagemakerWorkteamArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.memberDefinitions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'memberDefinitions'");
            }
            if ((!args || args.workforceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workforceName'");
            }
            if ((!args || args.workteamName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workteamName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["memberDefinitions"] = args ? args.memberDefinitions : undefined;
            resourceInputs["notificationConfiguration"] = args ? args.notificationConfiguration : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["workerAccessConfiguration"] = args ? args.workerAccessConfiguration : undefined;
            resourceInputs["workforceName"] = args ? args.workforceName : undefined;
            resourceInputs["workteamName"] = args ? args.workteamName : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["subdomain"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SagemakerWorkteam.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SagemakerWorkteam resources.
 */
export interface SagemakerWorkteamState {
    arn?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    memberDefinitions?: pulumi.Input<pulumi.Input<inputs.SagemakerWorkteamMemberDefinition>[]>;
    notificationConfiguration?: pulumi.Input<inputs.SagemakerWorkteamNotificationConfiguration>;
    subdomain?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    workerAccessConfiguration?: pulumi.Input<inputs.SagemakerWorkteamWorkerAccessConfiguration>;
    workforceName?: pulumi.Input<string>;
    workteamName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SagemakerWorkteam resource.
 */
export interface SagemakerWorkteamArgs {
    description: pulumi.Input<string>;
    memberDefinitions: pulumi.Input<pulumi.Input<inputs.SagemakerWorkteamMemberDefinition>[]>;
    notificationConfiguration?: pulumi.Input<inputs.SagemakerWorkteamNotificationConfiguration>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    workerAccessConfiguration?: pulumi.Input<inputs.SagemakerWorkteamWorkerAccessConfiguration>;
    workforceName: pulumi.Input<string>;
    workteamName: pulumi.Input<string>;
}
