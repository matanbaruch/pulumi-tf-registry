// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Cloudbuildv2Connection extends pulumi.CustomResource {
    /**
     * Get an existing Cloudbuildv2Connection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cloudbuildv2ConnectionState, opts?: pulumi.CustomResourceOptions): Cloudbuildv2Connection {
        return new Cloudbuildv2Connection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/cloudbuildv2Connection:Cloudbuildv2Connection';

    /**
     * Returns true if the given object is an instance of Cloudbuildv2Connection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cloudbuildv2Connection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cloudbuildv2Connection.__pulumiType;
    }

    /**
     * Allows clients to store small amounts of arbitrary data. **Note**: This field is non-authoritative, and will only manage
     * the annotations present in your configuration. Please refer to the field 'effective_annotations' for all of the
     * annotations present on the resource.
     */
    public readonly annotations!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Configuration for connections to Bitbucket Cloud.
     */
    public readonly bitbucketCloudConfig!: pulumi.Output<outputs.Cloudbuildv2ConnectionBitbucketCloudConfig | undefined>;
    /**
     * Configuration for connections to Bitbucket Data Center.
     */
    public readonly bitbucketDataCenterConfig!: pulumi.Output<outputs.Cloudbuildv2ConnectionBitbucketDataCenterConfig | undefined>;
    /**
     * Output only. Server assigned timestamp for when the connection was created.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks
     * processing for repositories in this connection will be disabled.
     */
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly effectiveAnnotations!: pulumi.Output<{[key: string]: string}>;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete
     * requests to ensure the client has an up-to-date value before proceeding.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Configuration for connections to github.com.
     */
    public readonly githubConfig!: pulumi.Output<outputs.Cloudbuildv2ConnectionGithubConfig | undefined>;
    /**
     * Configuration for connections to an instance of GitHub Enterprise.
     */
    public readonly githubEnterpriseConfig!: pulumi.Output<outputs.Cloudbuildv2ConnectionGithubEnterpriseConfig | undefined>;
    /**
     * Configuration for connections to gitlab.com or an instance of GitLab Enterprise.
     */
    public readonly gitlabConfig!: pulumi.Output<outputs.Cloudbuildv2ConnectionGitlabConfig | undefined>;
    /**
     * Output only. Installation state of the Connection.
     */
    public /*out*/ readonly installationStates!: pulumi.Output<outputs.Cloudbuildv2ConnectionInstallationState[]>;
    /**
     * The location for the resource
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Immutable. The resource name of the connection.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Output only. Set to true when the connection is being set up or updated in the background.
     */
    public /*out*/ readonly reconciling!: pulumi.Output<boolean>;
    public readonly timeouts!: pulumi.Output<outputs.Cloudbuildv2ConnectionTimeouts | undefined>;
    /**
     * Output only. Server assigned timestamp for when the connection was updated.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a Cloudbuildv2Connection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Cloudbuildv2ConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cloudbuildv2ConnectionArgs | Cloudbuildv2ConnectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cloudbuildv2ConnectionState | undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["bitbucketCloudConfig"] = state ? state.bitbucketCloudConfig : undefined;
            resourceInputs["bitbucketDataCenterConfig"] = state ? state.bitbucketDataCenterConfig : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["effectiveAnnotations"] = state ? state.effectiveAnnotations : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["githubConfig"] = state ? state.githubConfig : undefined;
            resourceInputs["githubEnterpriseConfig"] = state ? state.githubEnterpriseConfig : undefined;
            resourceInputs["gitlabConfig"] = state ? state.gitlabConfig : undefined;
            resourceInputs["installationStates"] = state ? state.installationStates : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["reconciling"] = state ? state.reconciling : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as Cloudbuildv2ConnectionArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["bitbucketCloudConfig"] = args ? args.bitbucketCloudConfig : undefined;
            resourceInputs["bitbucketDataCenterConfig"] = args ? args.bitbucketDataCenterConfig : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["githubConfig"] = args ? args.githubConfig : undefined;
            resourceInputs["githubEnterpriseConfig"] = args ? args.githubEnterpriseConfig : undefined;
            resourceInputs["gitlabConfig"] = args ? args.gitlabConfig : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveAnnotations"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["installationStates"] = undefined /*out*/;
            resourceInputs["reconciling"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cloudbuildv2Connection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cloudbuildv2Connection resources.
 */
export interface Cloudbuildv2ConnectionState {
    /**
     * Allows clients to store small amounts of arbitrary data. **Note**: This field is non-authoritative, and will only manage
     * the annotations present in your configuration. Please refer to the field 'effective_annotations' for all of the
     * annotations present on the resource.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Configuration for connections to Bitbucket Cloud.
     */
    bitbucketCloudConfig?: pulumi.Input<inputs.Cloudbuildv2ConnectionBitbucketCloudConfig>;
    /**
     * Configuration for connections to Bitbucket Data Center.
     */
    bitbucketDataCenterConfig?: pulumi.Input<inputs.Cloudbuildv2ConnectionBitbucketDataCenterConfig>;
    /**
     * Output only. Server assigned timestamp for when the connection was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks
     * processing for repositories in this connection will be disabled.
     */
    disabled?: pulumi.Input<boolean>;
    effectiveAnnotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete
     * requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: pulumi.Input<string>;
    /**
     * Configuration for connections to github.com.
     */
    githubConfig?: pulumi.Input<inputs.Cloudbuildv2ConnectionGithubConfig>;
    /**
     * Configuration for connections to an instance of GitHub Enterprise.
     */
    githubEnterpriseConfig?: pulumi.Input<inputs.Cloudbuildv2ConnectionGithubEnterpriseConfig>;
    /**
     * Configuration for connections to gitlab.com or an instance of GitLab Enterprise.
     */
    gitlabConfig?: pulumi.Input<inputs.Cloudbuildv2ConnectionGitlabConfig>;
    /**
     * Output only. Installation state of the Connection.
     */
    installationStates?: pulumi.Input<pulumi.Input<inputs.Cloudbuildv2ConnectionInstallationState>[]>;
    /**
     * The location for the resource
     */
    location?: pulumi.Input<string>;
    /**
     * Immutable. The resource name of the connection.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Output only. Set to true when the connection is being set up or updated in the background.
     */
    reconciling?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.Cloudbuildv2ConnectionTimeouts>;
    /**
     * Output only. Server assigned timestamp for when the connection was updated.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cloudbuildv2Connection resource.
 */
export interface Cloudbuildv2ConnectionArgs {
    /**
     * Allows clients to store small amounts of arbitrary data. **Note**: This field is non-authoritative, and will only manage
     * the annotations present in your configuration. Please refer to the field 'effective_annotations' for all of the
     * annotations present on the resource.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Configuration for connections to Bitbucket Cloud.
     */
    bitbucketCloudConfig?: pulumi.Input<inputs.Cloudbuildv2ConnectionBitbucketCloudConfig>;
    /**
     * Configuration for connections to Bitbucket Data Center.
     */
    bitbucketDataCenterConfig?: pulumi.Input<inputs.Cloudbuildv2ConnectionBitbucketDataCenterConfig>;
    /**
     * If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks
     * processing for repositories in this connection will be disabled.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration for connections to github.com.
     */
    githubConfig?: pulumi.Input<inputs.Cloudbuildv2ConnectionGithubConfig>;
    /**
     * Configuration for connections to an instance of GitHub Enterprise.
     */
    githubEnterpriseConfig?: pulumi.Input<inputs.Cloudbuildv2ConnectionGithubEnterpriseConfig>;
    /**
     * Configuration for connections to gitlab.com or an instance of GitLab Enterprise.
     */
    gitlabConfig?: pulumi.Input<inputs.Cloudbuildv2ConnectionGitlabConfig>;
    /**
     * The location for the resource
     */
    location: pulumi.Input<string>;
    /**
     * Immutable. The resource name of the connection.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.Cloudbuildv2ConnectionTimeouts>;
}
