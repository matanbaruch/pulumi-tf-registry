// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ElasticsearchSecurityRole extends pulumi.CustomResource {
    /**
     * Get an existing ElasticsearchSecurityRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ElasticsearchSecurityRoleState, opts?: pulumi.CustomResourceOptions): ElasticsearchSecurityRole {
        return new ElasticsearchSecurityRole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'elasticstack:index/elasticsearchSecurityRole:ElasticsearchSecurityRole';

    /**
     * Returns true if the given object is an instance of ElasticsearchSecurityRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ElasticsearchSecurityRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ElasticsearchSecurityRole.__pulumiType;
    }

    /**
     * A list of application privilege entries.
     */
    public readonly applications!: pulumi.Output<outputs.ElasticsearchSecurityRoleApplication[] | undefined>;
    /**
     * A list of cluster privileges. These privileges define the cluster level actions that users with this role are able to
     * execute.
     */
    public readonly clusters!: pulumi.Output<string[] | undefined>;
    /**
     * Elasticsearch connection configuration block. This property will be removed in a future provider version. Configure the
     * Elasticsearch connection via the provider configuration instead.
     *
     * @deprecated Deprecated
     */
    public readonly elasticsearchConnection!: pulumi.Output<outputs.ElasticsearchSecurityRoleElasticsearchConnection | undefined>;
    /**
     * An object defining global privileges.
     */
    public readonly global!: pulumi.Output<string | undefined>;
    /**
     * A list of indices permissions entries.
     */
    public readonly indices!: pulumi.Output<outputs.ElasticsearchSecurityRoleIndex[] | undefined>;
    /**
     * Optional meta-data.
     */
    public readonly metadata!: pulumi.Output<string>;
    /**
     * The name of the role.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A list of users that the owners of this role can impersonate.
     */
    public readonly runAs!: pulumi.Output<string[] | undefined>;

    /**
     * Create a ElasticsearchSecurityRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ElasticsearchSecurityRoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ElasticsearchSecurityRoleArgs | ElasticsearchSecurityRoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ElasticsearchSecurityRoleState | undefined;
            resourceInputs["applications"] = state ? state.applications : undefined;
            resourceInputs["clusters"] = state ? state.clusters : undefined;
            resourceInputs["elasticsearchConnection"] = state ? state.elasticsearchConnection : undefined;
            resourceInputs["global"] = state ? state.global : undefined;
            resourceInputs["indices"] = state ? state.indices : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["runAs"] = state ? state.runAs : undefined;
        } else {
            const args = argsOrState as ElasticsearchSecurityRoleArgs | undefined;
            resourceInputs["applications"] = args ? args.applications : undefined;
            resourceInputs["clusters"] = args ? args.clusters : undefined;
            resourceInputs["elasticsearchConnection"] = args ? args.elasticsearchConnection : undefined;
            resourceInputs["global"] = args ? args.global : undefined;
            resourceInputs["indices"] = args ? args.indices : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["runAs"] = args ? args.runAs : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ElasticsearchSecurityRole.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ElasticsearchSecurityRole resources.
 */
export interface ElasticsearchSecurityRoleState {
    /**
     * A list of application privilege entries.
     */
    applications?: pulumi.Input<pulumi.Input<inputs.ElasticsearchSecurityRoleApplication>[]>;
    /**
     * A list of cluster privileges. These privileges define the cluster level actions that users with this role are able to
     * execute.
     */
    clusters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Elasticsearch connection configuration block. This property will be removed in a future provider version. Configure the
     * Elasticsearch connection via the provider configuration instead.
     *
     * @deprecated Deprecated
     */
    elasticsearchConnection?: pulumi.Input<inputs.ElasticsearchSecurityRoleElasticsearchConnection>;
    /**
     * An object defining global privileges.
     */
    global?: pulumi.Input<string>;
    /**
     * A list of indices permissions entries.
     */
    indices?: pulumi.Input<pulumi.Input<inputs.ElasticsearchSecurityRoleIndex>[]>;
    /**
     * Optional meta-data.
     */
    metadata?: pulumi.Input<string>;
    /**
     * The name of the role.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of users that the owners of this role can impersonate.
     */
    runAs?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ElasticsearchSecurityRole resource.
 */
export interface ElasticsearchSecurityRoleArgs {
    /**
     * A list of application privilege entries.
     */
    applications?: pulumi.Input<pulumi.Input<inputs.ElasticsearchSecurityRoleApplication>[]>;
    /**
     * A list of cluster privileges. These privileges define the cluster level actions that users with this role are able to
     * execute.
     */
    clusters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Elasticsearch connection configuration block. This property will be removed in a future provider version. Configure the
     * Elasticsearch connection via the provider configuration instead.
     *
     * @deprecated Deprecated
     */
    elasticsearchConnection?: pulumi.Input<inputs.ElasticsearchSecurityRoleElasticsearchConnection>;
    /**
     * An object defining global privileges.
     */
    global?: pulumi.Input<string>;
    /**
     * A list of indices permissions entries.
     */
    indices?: pulumi.Input<pulumi.Input<inputs.ElasticsearchSecurityRoleIndex>[]>;
    /**
     * Optional meta-data.
     */
    metadata?: pulumi.Input<string>;
    /**
     * The name of the role.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of users that the owners of this role can impersonate.
     */
    runAs?: pulumi.Input<pulumi.Input<string>[]>;
}
