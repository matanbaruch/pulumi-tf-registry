// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IapWebBackendServiceIamPolicy extends pulumi.CustomResource {
    /**
     * Get an existing IapWebBackendServiceIamPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IapWebBackendServiceIamPolicyState, opts?: pulumi.CustomResourceOptions): IapWebBackendServiceIamPolicy {
        return new IapWebBackendServiceIamPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/iapWebBackendServiceIamPolicy:IapWebBackendServiceIamPolicy';

    /**
     * Returns true if the given object is an instance of IapWebBackendServiceIamPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IapWebBackendServiceIamPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IapWebBackendServiceIamPolicy.__pulumiType;
    }

    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly policyData!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly webBackendService!: pulumi.Output<string>;

    /**
     * Create a IapWebBackendServiceIamPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IapWebBackendServiceIamPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IapWebBackendServiceIamPolicyArgs | IapWebBackendServiceIamPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IapWebBackendServiceIamPolicyState | undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["policyData"] = state ? state.policyData : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["webBackendService"] = state ? state.webBackendService : undefined;
        } else {
            const args = argsOrState as IapWebBackendServiceIamPolicyArgs | undefined;
            if ((!args || args.policyData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyData'");
            }
            if ((!args || args.webBackendService === undefined) && !opts.urn) {
                throw new Error("Missing required property 'webBackendService'");
            }
            resourceInputs["policyData"] = args ? args.policyData : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["webBackendService"] = args ? args.webBackendService : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IapWebBackendServiceIamPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IapWebBackendServiceIamPolicy resources.
 */
export interface IapWebBackendServiceIamPolicyState {
    etag?: pulumi.Input<string>;
    policyData?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    webBackendService?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IapWebBackendServiceIamPolicy resource.
 */
export interface IapWebBackendServiceIamPolicyArgs {
    policyData: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    webBackendService: pulumi.Input<string>;
}
