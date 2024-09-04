// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FederatedGenericRepository extends pulumi.CustomResource {
    /**
     * Get an existing FederatedGenericRepository resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FederatedGenericRepositoryState, opts?: pulumi.CustomResourceOptions): FederatedGenericRepository {
        return new FederatedGenericRepository(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'artifactory:index/federatedGenericRepository:FederatedGenericRepository';

    /**
     * Returns true if the given object is an instance of FederatedGenericRepository.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FederatedGenericRepository {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FederatedGenericRepository.__pulumiType;
    }

    /**
     * When set, you may view content such as HTML or Javadoc files directly from Artifactory. This may not be safe and
     * therefore requires strict content moderation to prevent malicious users from uploading content that may compromise
     * security (e.g., cross-site scripting attacks).
     */
    public readonly archiveBrowsingEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * When set, the repository does not participate in artifact resolution and new artifacts cannot be deployed.
     */
    public readonly blackedOut!: pulumi.Output<boolean | undefined>;
    /**
     * When set, download requests to this repository will redirect the client to download the artifact directly from AWS
     * CloudFront. Available in Enterprise+ and Edge licenses only. Default value is 'false'
     */
    public readonly cdnRedirect!: pulumi.Output<boolean | undefined>;
    public readonly cleanupOnDelete!: pulumi.Output<boolean | undefined>;
    /**
     * Public description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * When set to `true`, the proxy is disabled, and not returned in the API response body. If there is a default proxy set
     * for the Artifactory instance, it will be ignored, too. Introduced since Artifactory 7.41.7.
     */
    public readonly disableProxy!: pulumi.Output<boolean | undefined>;
    /**
     * When set, download requests to this repository will redirect the client to download the artifact directly from the cloud
     * storage provider. Available in Enterprise+ and Edge licenses only.
     */
    public readonly downloadDirect!: pulumi.Output<boolean | undefined>;
    /**
     * List of artifact patterns to exclude when evaluating artifact requests, in the form of x/y/**&#47;z/*.By default no
     * artifacts are excluded.
     */
    public readonly excludesPattern!: pulumi.Output<string | undefined>;
    /**
     * List of comma-separated artifact patterns to include when evaluating artifact requests in the form of x/y/**&#47;z/*. When
     * used, only artifacts matching one of the include patterns are served. By default, all artifacts are included (**&#47;*).
     */
    public readonly includesPattern!: pulumi.Output<string | undefined>;
    /**
     * A mandatory identifier for the repository that must be unique. Must be 1 - 64 alphanumeric and hyphen characters. It
     * cannot contain spaces or special characters.
     */
    public readonly key!: pulumi.Output<string>;
    /**
     * The list of Federated members. If a Federated member receives a request that does not include the repository URL, it
     * will automatically be added with the combination of the configured base URL and `key` field value. Note that each of the
     * federated members will need to have a base URL set. Please follow the
     * [instruction](https://www.jfrog.com/confluence/display/JFROG/Working+with+Federated+Repositories#WorkingwithFederatedRepositories-SettingUpaFederatedRepository)
     * to set up Federated repositories correctly.
     */
    public readonly members!: pulumi.Output<outputs.FederatedGenericRepositoryMember[]>;
    /**
     * Internal description.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    public /*out*/ readonly packageType!: pulumi.Output<string>;
    /**
     * Setting repositories with priority will cause metadata to be merged only from repositories set with this field
     */
    public readonly priorityResolution!: pulumi.Output<boolean | undefined>;
    public readonly projectEnvironments!: pulumi.Output<string[]>;
    /**
     * Project key for assigning this repository to. Must be 2 - 32 lowercase alphanumeric and hyphen characters. When
     * assigning repository to a project, repository key must be prefixed with project key, separated by a dash.
     */
    public readonly projectKey!: pulumi.Output<string | undefined>;
    /**
     * List of property set name
     */
    public readonly propertySets!: pulumi.Output<string[] | undefined>;
    /**
     * Proxy key from Artifactory Proxies settings. Can't be set if `disable_proxy = true`.
     */
    public readonly proxy!: pulumi.Output<string | undefined>;
    /**
     * Repository layout key for the federated repository
     */
    public readonly repoLayoutRef!: pulumi.Output<string | undefined>;
    /**
     * Enable Indexing In Xray. Repository will be indexed with the default retention period. You will be able to change it via
     * Xray settings.
     */
    public readonly xrayIndex!: pulumi.Output<boolean | undefined>;

    /**
     * Create a FederatedGenericRepository resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FederatedGenericRepositoryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FederatedGenericRepositoryArgs | FederatedGenericRepositoryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FederatedGenericRepositoryState | undefined;
            resourceInputs["archiveBrowsingEnabled"] = state ? state.archiveBrowsingEnabled : undefined;
            resourceInputs["blackedOut"] = state ? state.blackedOut : undefined;
            resourceInputs["cdnRedirect"] = state ? state.cdnRedirect : undefined;
            resourceInputs["cleanupOnDelete"] = state ? state.cleanupOnDelete : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disableProxy"] = state ? state.disableProxy : undefined;
            resourceInputs["downloadDirect"] = state ? state.downloadDirect : undefined;
            resourceInputs["excludesPattern"] = state ? state.excludesPattern : undefined;
            resourceInputs["includesPattern"] = state ? state.includesPattern : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["packageType"] = state ? state.packageType : undefined;
            resourceInputs["priorityResolution"] = state ? state.priorityResolution : undefined;
            resourceInputs["projectEnvironments"] = state ? state.projectEnvironments : undefined;
            resourceInputs["projectKey"] = state ? state.projectKey : undefined;
            resourceInputs["propertySets"] = state ? state.propertySets : undefined;
            resourceInputs["proxy"] = state ? state.proxy : undefined;
            resourceInputs["repoLayoutRef"] = state ? state.repoLayoutRef : undefined;
            resourceInputs["xrayIndex"] = state ? state.xrayIndex : undefined;
        } else {
            const args = argsOrState as FederatedGenericRepositoryArgs | undefined;
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            if ((!args || args.members === undefined) && !opts.urn) {
                throw new Error("Missing required property 'members'");
            }
            resourceInputs["archiveBrowsingEnabled"] = args ? args.archiveBrowsingEnabled : undefined;
            resourceInputs["blackedOut"] = args ? args.blackedOut : undefined;
            resourceInputs["cdnRedirect"] = args ? args.cdnRedirect : undefined;
            resourceInputs["cleanupOnDelete"] = args ? args.cleanupOnDelete : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disableProxy"] = args ? args.disableProxy : undefined;
            resourceInputs["downloadDirect"] = args ? args.downloadDirect : undefined;
            resourceInputs["excludesPattern"] = args ? args.excludesPattern : undefined;
            resourceInputs["includesPattern"] = args ? args.includesPattern : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["priorityResolution"] = args ? args.priorityResolution : undefined;
            resourceInputs["projectEnvironments"] = args ? args.projectEnvironments : undefined;
            resourceInputs["projectKey"] = args ? args.projectKey : undefined;
            resourceInputs["propertySets"] = args ? args.propertySets : undefined;
            resourceInputs["proxy"] = args ? args.proxy : undefined;
            resourceInputs["repoLayoutRef"] = args ? args.repoLayoutRef : undefined;
            resourceInputs["xrayIndex"] = args ? args.xrayIndex : undefined;
            resourceInputs["packageType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FederatedGenericRepository.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FederatedGenericRepository resources.
 */
export interface FederatedGenericRepositoryState {
    /**
     * When set, you may view content such as HTML or Javadoc files directly from Artifactory. This may not be safe and
     * therefore requires strict content moderation to prevent malicious users from uploading content that may compromise
     * security (e.g., cross-site scripting attacks).
     */
    archiveBrowsingEnabled?: pulumi.Input<boolean>;
    /**
     * When set, the repository does not participate in artifact resolution and new artifacts cannot be deployed.
     */
    blackedOut?: pulumi.Input<boolean>;
    /**
     * When set, download requests to this repository will redirect the client to download the artifact directly from AWS
     * CloudFront. Available in Enterprise+ and Edge licenses only. Default value is 'false'
     */
    cdnRedirect?: pulumi.Input<boolean>;
    cleanupOnDelete?: pulumi.Input<boolean>;
    /**
     * Public description.
     */
    description?: pulumi.Input<string>;
    /**
     * When set to `true`, the proxy is disabled, and not returned in the API response body. If there is a default proxy set
     * for the Artifactory instance, it will be ignored, too. Introduced since Artifactory 7.41.7.
     */
    disableProxy?: pulumi.Input<boolean>;
    /**
     * When set, download requests to this repository will redirect the client to download the artifact directly from the cloud
     * storage provider. Available in Enterprise+ and Edge licenses only.
     */
    downloadDirect?: pulumi.Input<boolean>;
    /**
     * List of artifact patterns to exclude when evaluating artifact requests, in the form of x/y/**&#47;z/*.By default no
     * artifacts are excluded.
     */
    excludesPattern?: pulumi.Input<string>;
    /**
     * List of comma-separated artifact patterns to include when evaluating artifact requests in the form of x/y/**&#47;z/*. When
     * used, only artifacts matching one of the include patterns are served. By default, all artifacts are included (**&#47;*).
     */
    includesPattern?: pulumi.Input<string>;
    /**
     * A mandatory identifier for the repository that must be unique. Must be 1 - 64 alphanumeric and hyphen characters. It
     * cannot contain spaces or special characters.
     */
    key?: pulumi.Input<string>;
    /**
     * The list of Federated members. If a Federated member receives a request that does not include the repository URL, it
     * will automatically be added with the combination of the configured base URL and `key` field value. Note that each of the
     * federated members will need to have a base URL set. Please follow the
     * [instruction](https://www.jfrog.com/confluence/display/JFROG/Working+with+Federated+Repositories#WorkingwithFederatedRepositories-SettingUpaFederatedRepository)
     * to set up Federated repositories correctly.
     */
    members?: pulumi.Input<pulumi.Input<inputs.FederatedGenericRepositoryMember>[]>;
    /**
     * Internal description.
     */
    notes?: pulumi.Input<string>;
    packageType?: pulumi.Input<string>;
    /**
     * Setting repositories with priority will cause metadata to be merged only from repositories set with this field
     */
    priorityResolution?: pulumi.Input<boolean>;
    projectEnvironments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Project key for assigning this repository to. Must be 2 - 32 lowercase alphanumeric and hyphen characters. When
     * assigning repository to a project, repository key must be prefixed with project key, separated by a dash.
     */
    projectKey?: pulumi.Input<string>;
    /**
     * List of property set name
     */
    propertySets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Proxy key from Artifactory Proxies settings. Can't be set if `disable_proxy = true`.
     */
    proxy?: pulumi.Input<string>;
    /**
     * Repository layout key for the federated repository
     */
    repoLayoutRef?: pulumi.Input<string>;
    /**
     * Enable Indexing In Xray. Repository will be indexed with the default retention period. You will be able to change it via
     * Xray settings.
     */
    xrayIndex?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a FederatedGenericRepository resource.
 */
export interface FederatedGenericRepositoryArgs {
    /**
     * When set, you may view content such as HTML or Javadoc files directly from Artifactory. This may not be safe and
     * therefore requires strict content moderation to prevent malicious users from uploading content that may compromise
     * security (e.g., cross-site scripting attacks).
     */
    archiveBrowsingEnabled?: pulumi.Input<boolean>;
    /**
     * When set, the repository does not participate in artifact resolution and new artifacts cannot be deployed.
     */
    blackedOut?: pulumi.Input<boolean>;
    /**
     * When set, download requests to this repository will redirect the client to download the artifact directly from AWS
     * CloudFront. Available in Enterprise+ and Edge licenses only. Default value is 'false'
     */
    cdnRedirect?: pulumi.Input<boolean>;
    cleanupOnDelete?: pulumi.Input<boolean>;
    /**
     * Public description.
     */
    description?: pulumi.Input<string>;
    /**
     * When set to `true`, the proxy is disabled, and not returned in the API response body. If there is a default proxy set
     * for the Artifactory instance, it will be ignored, too. Introduced since Artifactory 7.41.7.
     */
    disableProxy?: pulumi.Input<boolean>;
    /**
     * When set, download requests to this repository will redirect the client to download the artifact directly from the cloud
     * storage provider. Available in Enterprise+ and Edge licenses only.
     */
    downloadDirect?: pulumi.Input<boolean>;
    /**
     * List of artifact patterns to exclude when evaluating artifact requests, in the form of x/y/**&#47;z/*.By default no
     * artifacts are excluded.
     */
    excludesPattern?: pulumi.Input<string>;
    /**
     * List of comma-separated artifact patterns to include when evaluating artifact requests in the form of x/y/**&#47;z/*. When
     * used, only artifacts matching one of the include patterns are served. By default, all artifacts are included (**&#47;*).
     */
    includesPattern?: pulumi.Input<string>;
    /**
     * A mandatory identifier for the repository that must be unique. Must be 1 - 64 alphanumeric and hyphen characters. It
     * cannot contain spaces or special characters.
     */
    key: pulumi.Input<string>;
    /**
     * The list of Federated members. If a Federated member receives a request that does not include the repository URL, it
     * will automatically be added with the combination of the configured base URL and `key` field value. Note that each of the
     * federated members will need to have a base URL set. Please follow the
     * [instruction](https://www.jfrog.com/confluence/display/JFROG/Working+with+Federated+Repositories#WorkingwithFederatedRepositories-SettingUpaFederatedRepository)
     * to set up Federated repositories correctly.
     */
    members: pulumi.Input<pulumi.Input<inputs.FederatedGenericRepositoryMember>[]>;
    /**
     * Internal description.
     */
    notes?: pulumi.Input<string>;
    /**
     * Setting repositories with priority will cause metadata to be merged only from repositories set with this field
     */
    priorityResolution?: pulumi.Input<boolean>;
    projectEnvironments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Project key for assigning this repository to. Must be 2 - 32 lowercase alphanumeric and hyphen characters. When
     * assigning repository to a project, repository key must be prefixed with project key, separated by a dash.
     */
    projectKey?: pulumi.Input<string>;
    /**
     * List of property set name
     */
    propertySets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Proxy key from Artifactory Proxies settings. Can't be set if `disable_proxy = true`.
     */
    proxy?: pulumi.Input<string>;
    /**
     * Repository layout key for the federated repository
     */
    repoLayoutRef?: pulumi.Input<string>;
    /**
     * Enable Indexing In Xray. Repository will be indexed with the default retention period. You will be able to change it via
     * Xray settings.
     */
    xrayIndex?: pulumi.Input<boolean>;
}
