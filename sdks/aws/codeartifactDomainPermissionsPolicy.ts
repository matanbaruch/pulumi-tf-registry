// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CodeartifactDomainPermissionsPolicy extends pulumi.CustomResource {
    /**
     * Get an existing CodeartifactDomainPermissionsPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CodeartifactDomainPermissionsPolicyState, opts?: pulumi.CustomResourceOptions): CodeartifactDomainPermissionsPolicy {
        return new CodeartifactDomainPermissionsPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/codeartifactDomainPermissionsPolicy:CodeartifactDomainPermissionsPolicy';

    /**
     * Returns true if the given object is an instance of CodeartifactDomainPermissionsPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CodeartifactDomainPermissionsPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CodeartifactDomainPermissionsPolicy.__pulumiType;
    }

    public readonly domain!: pulumi.Output<string>;
    public readonly domainOwner!: pulumi.Output<string>;
    public readonly policyDocument!: pulumi.Output<string>;
    public readonly policyRevision!: pulumi.Output<string>;
    public /*out*/ readonly resourceArn!: pulumi.Output<string>;

    /**
     * Create a CodeartifactDomainPermissionsPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CodeartifactDomainPermissionsPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CodeartifactDomainPermissionsPolicyArgs | CodeartifactDomainPermissionsPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CodeartifactDomainPermissionsPolicyState | undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["domainOwner"] = state ? state.domainOwner : undefined;
            resourceInputs["policyDocument"] = state ? state.policyDocument : undefined;
            resourceInputs["policyRevision"] = state ? state.policyRevision : undefined;
            resourceInputs["resourceArn"] = state ? state.resourceArn : undefined;
        } else {
            const args = argsOrState as CodeartifactDomainPermissionsPolicyArgs | undefined;
            if ((!args || args.domain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domain'");
            }
            if ((!args || args.policyDocument === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyDocument'");
            }
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["domainOwner"] = args ? args.domainOwner : undefined;
            resourceInputs["policyDocument"] = args ? args.policyDocument : undefined;
            resourceInputs["policyRevision"] = args ? args.policyRevision : undefined;
            resourceInputs["resourceArn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CodeartifactDomainPermissionsPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CodeartifactDomainPermissionsPolicy resources.
 */
export interface CodeartifactDomainPermissionsPolicyState {
    domain?: pulumi.Input<string>;
    domainOwner?: pulumi.Input<string>;
    policyDocument?: pulumi.Input<string>;
    policyRevision?: pulumi.Input<string>;
    resourceArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CodeartifactDomainPermissionsPolicy resource.
 */
export interface CodeartifactDomainPermissionsPolicyArgs {
    domain: pulumi.Input<string>;
    domainOwner?: pulumi.Input<string>;
    policyDocument: pulumi.Input<string>;
    policyRevision?: pulumi.Input<string>;
}
