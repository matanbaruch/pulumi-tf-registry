// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IapAppEngineServiceIamMember extends pulumi.CustomResource {
    /**
     * Get an existing IapAppEngineServiceIamMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IapAppEngineServiceIamMemberState, opts?: pulumi.CustomResourceOptions): IapAppEngineServiceIamMember {
        return new IapAppEngineServiceIamMember(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/iapAppEngineServiceIamMember:IapAppEngineServiceIamMember';

    /**
     * Returns true if the given object is an instance of IapAppEngineServiceIamMember.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IapAppEngineServiceIamMember {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IapAppEngineServiceIamMember.__pulumiType;
    }

    public readonly appId!: pulumi.Output<string>;
    public readonly condition!: pulumi.Output<outputs.IapAppEngineServiceIamMemberCondition | undefined>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly member!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly role!: pulumi.Output<string>;
    public readonly service!: pulumi.Output<string>;

    /**
     * Create a IapAppEngineServiceIamMember resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IapAppEngineServiceIamMemberArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IapAppEngineServiceIamMemberArgs | IapAppEngineServiceIamMemberState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IapAppEngineServiceIamMemberState | undefined;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["condition"] = state ? state.condition : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["member"] = state ? state.member : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["service"] = state ? state.service : undefined;
        } else {
            const args = argsOrState as IapAppEngineServiceIamMemberArgs | undefined;
            if ((!args || args.appId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appId'");
            }
            if ((!args || args.member === undefined) && !opts.urn) {
                throw new Error("Missing required property 'member'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            if ((!args || args.service === undefined) && !opts.urn) {
                throw new Error("Missing required property 'service'");
            }
            resourceInputs["appId"] = args ? args.appId : undefined;
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["member"] = args ? args.member : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IapAppEngineServiceIamMember.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IapAppEngineServiceIamMember resources.
 */
export interface IapAppEngineServiceIamMemberState {
    appId?: pulumi.Input<string>;
    condition?: pulumi.Input<inputs.IapAppEngineServiceIamMemberCondition>;
    etag?: pulumi.Input<string>;
    member?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    service?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IapAppEngineServiceIamMember resource.
 */
export interface IapAppEngineServiceIamMemberArgs {
    appId: pulumi.Input<string>;
    condition?: pulumi.Input<inputs.IapAppEngineServiceIamMemberCondition>;
    member: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    role: pulumi.Input<string>;
    service: pulumi.Input<string>;
}
