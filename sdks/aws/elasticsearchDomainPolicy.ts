// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ElasticsearchDomainPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ElasticsearchDomainPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ElasticsearchDomainPolicyState, opts?: pulumi.CustomResourceOptions): ElasticsearchDomainPolicy {
        return new ElasticsearchDomainPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/elasticsearchDomainPolicy:ElasticsearchDomainPolicy';

    /**
     * Returns true if the given object is an instance of ElasticsearchDomainPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ElasticsearchDomainPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ElasticsearchDomainPolicy.__pulumiType;
    }

    public readonly accessPolicies!: pulumi.Output<string>;
    public readonly domainName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ElasticsearchDomainPolicyTimeouts | undefined>;

    /**
     * Create a ElasticsearchDomainPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ElasticsearchDomainPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ElasticsearchDomainPolicyArgs | ElasticsearchDomainPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ElasticsearchDomainPolicyState | undefined;
            resourceInputs["accessPolicies"] = state ? state.accessPolicies : undefined;
            resourceInputs["domainName"] = state ? state.domainName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ElasticsearchDomainPolicyArgs | undefined;
            if ((!args || args.accessPolicies === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessPolicies'");
            }
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            resourceInputs["accessPolicies"] = args ? args.accessPolicies : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ElasticsearchDomainPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ElasticsearchDomainPolicy resources.
 */
export interface ElasticsearchDomainPolicyState {
    accessPolicies?: pulumi.Input<string>;
    domainName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ElasticsearchDomainPolicyTimeouts>;
}

/**
 * The set of arguments for constructing a ElasticsearchDomainPolicy resource.
 */
export interface ElasticsearchDomainPolicyArgs {
    accessPolicies: pulumi.Input<string>;
    domainName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ElasticsearchDomainPolicyTimeouts>;
}
