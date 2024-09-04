// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SecurityposturePosture extends pulumi.CustomResource {
    /**
     * Get an existing SecurityposturePosture resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityposturePostureState, opts?: pulumi.CustomResourceOptions): SecurityposturePosture {
        return new SecurityposturePosture(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/securityposturePosture:SecurityposturePosture';

    /**
     * Returns true if the given object is an instance of SecurityposturePosture.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityposturePosture {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityposturePosture.__pulumiType;
    }

    /**
     * Time the Posture was created in UTC.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Description of the posture.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * For Resource freshness validation (https://google.aip.dev/154)
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Location of the resource, eg: global.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Name of the posture.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.
     */
    public readonly parent!: pulumi.Output<string>;
    /**
     * List of policy sets for the posture.
     */
    public readonly policySets!: pulumi.Output<outputs.SecurityposturePosturePolicySet[]>;
    /**
     * Id of the posture. It is an immutable field.
     */
    public readonly postureId!: pulumi.Output<string>;
    /**
     * If set, there are currently changes in flight to the posture.
     */
    public /*out*/ readonly reconciling!: pulumi.Output<boolean>;
    /**
     * Revision_id of the posture.
     */
    public /*out*/ readonly revisionId!: pulumi.Output<string>;
    /**
     * State of the posture. Update to state field should not be triggered along with with other field updates. Possible
     * values: ["DEPRECATED", "DRAFT", "ACTIVE"]
     */
    public readonly state!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SecurityposturePostureTimeouts | undefined>;
    /**
     * Time the Posture was updated in UTC.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a SecurityposturePosture resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityposturePostureArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityposturePostureArgs | SecurityposturePostureState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecurityposturePostureState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parent"] = state ? state.parent : undefined;
            resourceInputs["policySets"] = state ? state.policySets : undefined;
            resourceInputs["postureId"] = state ? state.postureId : undefined;
            resourceInputs["reconciling"] = state ? state.reconciling : undefined;
            resourceInputs["revisionId"] = state ? state.revisionId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as SecurityposturePostureArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.parent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parent'");
            }
            if ((!args || args.policySets === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policySets'");
            }
            if ((!args || args.postureId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'postureId'");
            }
            if ((!args || args.state === undefined) && !opts.urn) {
                throw new Error("Missing required property 'state'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["parent"] = args ? args.parent : undefined;
            resourceInputs["policySets"] = args ? args.policySets : undefined;
            resourceInputs["postureId"] = args ? args.postureId : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["reconciling"] = undefined /*out*/;
            resourceInputs["revisionId"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecurityposturePosture.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecurityposturePosture resources.
 */
export interface SecurityposturePostureState {
    /**
     * Time the Posture was created in UTC.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Description of the posture.
     */
    description?: pulumi.Input<string>;
    /**
     * For Resource freshness validation (https://google.aip.dev/154)
     */
    etag?: pulumi.Input<string>;
    /**
     * Location of the resource, eg: global.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the posture.
     */
    name?: pulumi.Input<string>;
    /**
     * The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.
     */
    parent?: pulumi.Input<string>;
    /**
     * List of policy sets for the posture.
     */
    policySets?: pulumi.Input<pulumi.Input<inputs.SecurityposturePosturePolicySet>[]>;
    /**
     * Id of the posture. It is an immutable field.
     */
    postureId?: pulumi.Input<string>;
    /**
     * If set, there are currently changes in flight to the posture.
     */
    reconciling?: pulumi.Input<boolean>;
    /**
     * Revision_id of the posture.
     */
    revisionId?: pulumi.Input<string>;
    /**
     * State of the posture. Update to state field should not be triggered along with with other field updates. Possible
     * values: ["DEPRECATED", "DRAFT", "ACTIVE"]
     */
    state?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SecurityposturePostureTimeouts>;
    /**
     * Time the Posture was updated in UTC.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SecurityposturePosture resource.
 */
export interface SecurityposturePostureArgs {
    /**
     * Description of the posture.
     */
    description?: pulumi.Input<string>;
    /**
     * Location of the resource, eg: global.
     */
    location: pulumi.Input<string>;
    /**
     * The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.
     */
    parent: pulumi.Input<string>;
    /**
     * List of policy sets for the posture.
     */
    policySets: pulumi.Input<pulumi.Input<inputs.SecurityposturePosturePolicySet>[]>;
    /**
     * Id of the posture. It is an immutable field.
     */
    postureId: pulumi.Input<string>;
    /**
     * State of the posture. Update to state field should not be triggered along with with other field updates. Possible
     * values: ["DEPRECATED", "DRAFT", "ACTIVE"]
     */
    state: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SecurityposturePostureTimeouts>;
}
