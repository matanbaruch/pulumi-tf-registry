// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IapWebTypeAppEngineIamPolicy extends pulumi.CustomResource {
    /**
     * Get an existing IapWebTypeAppEngineIamPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IapWebTypeAppEngineIamPolicyState, opts?: pulumi.CustomResourceOptions): IapWebTypeAppEngineIamPolicy {
        return new IapWebTypeAppEngineIamPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/iapWebTypeAppEngineIamPolicy:IapWebTypeAppEngineIamPolicy';

    /**
     * Returns true if the given object is an instance of IapWebTypeAppEngineIamPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IapWebTypeAppEngineIamPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IapWebTypeAppEngineIamPolicy.__pulumiType;
    }

    public readonly appId!: pulumi.Output<string>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly policyData!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;

    /**
     * Create a IapWebTypeAppEngineIamPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IapWebTypeAppEngineIamPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IapWebTypeAppEngineIamPolicyArgs | IapWebTypeAppEngineIamPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IapWebTypeAppEngineIamPolicyState | undefined;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["policyData"] = state ? state.policyData : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
        } else {
            const args = argsOrState as IapWebTypeAppEngineIamPolicyArgs | undefined;
            if ((!args || args.appId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appId'");
            }
            if ((!args || args.policyData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyData'");
            }
            resourceInputs["appId"] = args ? args.appId : undefined;
            resourceInputs["policyData"] = args ? args.policyData : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IapWebTypeAppEngineIamPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IapWebTypeAppEngineIamPolicy resources.
 */
export interface IapWebTypeAppEngineIamPolicyState {
    appId?: pulumi.Input<string>;
    etag?: pulumi.Input<string>;
    policyData?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IapWebTypeAppEngineIamPolicy resource.
 */
export interface IapWebTypeAppEngineIamPolicyArgs {
    appId: pulumi.Input<string>;
    policyData: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
