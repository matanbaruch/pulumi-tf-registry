// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApiGatewayGatewayIamMember extends pulumi.CustomResource {
    /**
     * Get an existing ApiGatewayGatewayIamMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiGatewayGatewayIamMemberState, opts?: pulumi.CustomResourceOptions): ApiGatewayGatewayIamMember {
        return new ApiGatewayGatewayIamMember(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/apiGatewayGatewayIamMember:ApiGatewayGatewayIamMember';

    /**
     * Returns true if the given object is an instance of ApiGatewayGatewayIamMember.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiGatewayGatewayIamMember {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiGatewayGatewayIamMember.__pulumiType;
    }

    public readonly condition!: pulumi.Output<outputs.ApiGatewayGatewayIamMemberCondition | undefined>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly gateway!: pulumi.Output<string>;
    public readonly member!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly role!: pulumi.Output<string>;

    /**
     * Create a ApiGatewayGatewayIamMember resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiGatewayGatewayIamMemberArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiGatewayGatewayIamMemberArgs | ApiGatewayGatewayIamMemberState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApiGatewayGatewayIamMemberState | undefined;
            resourceInputs["condition"] = state ? state.condition : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["gateway"] = state ? state.gateway : undefined;
            resourceInputs["member"] = state ? state.member : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
        } else {
            const args = argsOrState as ApiGatewayGatewayIamMemberArgs | undefined;
            if ((!args || args.gateway === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gateway'");
            }
            if ((!args || args.member === undefined) && !opts.urn) {
                throw new Error("Missing required property 'member'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["gateway"] = args ? args.gateway : undefined;
            resourceInputs["member"] = args ? args.member : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApiGatewayGatewayIamMember.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApiGatewayGatewayIamMember resources.
 */
export interface ApiGatewayGatewayIamMemberState {
    condition?: pulumi.Input<inputs.ApiGatewayGatewayIamMemberCondition>;
    etag?: pulumi.Input<string>;
    gateway?: pulumi.Input<string>;
    member?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApiGatewayGatewayIamMember resource.
 */
export interface ApiGatewayGatewayIamMemberArgs {
    condition?: pulumi.Input<inputs.ApiGatewayGatewayIamMemberCondition>;
    gateway: pulumi.Input<string>;
    member: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    role: pulumi.Input<string>;
}
