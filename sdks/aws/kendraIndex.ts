// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KendraIndex extends pulumi.CustomResource {
    /**
     * Get an existing KendraIndex resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KendraIndexState, opts?: pulumi.CustomResourceOptions): KendraIndex {
        return new KendraIndex(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/kendraIndex:KendraIndex';

    /**
     * Returns true if the given object is an instance of KendraIndex.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KendraIndex {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KendraIndex.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly capacityUnits!: pulumi.Output<outputs.KendraIndexCapacityUnits | undefined>;
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly documentMetadataConfigurationUpdates!: pulumi.Output<outputs.KendraIndexDocumentMetadataConfigurationUpdate[] | undefined>;
    public readonly edition!: pulumi.Output<string | undefined>;
    public /*out*/ readonly errorMessage!: pulumi.Output<string>;
    public /*out*/ readonly indexStatistics!: pulumi.Output<outputs.KendraIndexIndexStatistic[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly roleArn!: pulumi.Output<string>;
    public readonly serverSideEncryptionConfiguration!: pulumi.Output<outputs.KendraIndexServerSideEncryptionConfiguration | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.KendraIndexTimeouts | undefined>;
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    public readonly userContextPolicy!: pulumi.Output<string | undefined>;
    public readonly userGroupResolutionConfiguration!: pulumi.Output<outputs.KendraIndexUserGroupResolutionConfiguration | undefined>;
    public readonly userTokenConfigurations!: pulumi.Output<outputs.KendraIndexUserTokenConfigurations | undefined>;

    /**
     * Create a KendraIndex resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KendraIndexArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KendraIndexArgs | KendraIndexState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KendraIndexState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["capacityUnits"] = state ? state.capacityUnits : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["documentMetadataConfigurationUpdates"] = state ? state.documentMetadataConfigurationUpdates : undefined;
            resourceInputs["edition"] = state ? state.edition : undefined;
            resourceInputs["errorMessage"] = state ? state.errorMessage : undefined;
            resourceInputs["indexStatistics"] = state ? state.indexStatistics : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["roleArn"] = state ? state.roleArn : undefined;
            resourceInputs["serverSideEncryptionConfiguration"] = state ? state.serverSideEncryptionConfiguration : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["userContextPolicy"] = state ? state.userContextPolicy : undefined;
            resourceInputs["userGroupResolutionConfiguration"] = state ? state.userGroupResolutionConfiguration : undefined;
            resourceInputs["userTokenConfigurations"] = state ? state.userTokenConfigurations : undefined;
        } else {
            const args = argsOrState as KendraIndexArgs | undefined;
            if ((!args || args.roleArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleArn'");
            }
            resourceInputs["capacityUnits"] = args ? args.capacityUnits : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["documentMetadataConfigurationUpdates"] = args ? args.documentMetadataConfigurationUpdates : undefined;
            resourceInputs["edition"] = args ? args.edition : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["roleArn"] = args ? args.roleArn : undefined;
            resourceInputs["serverSideEncryptionConfiguration"] = args ? args.serverSideEncryptionConfiguration : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userContextPolicy"] = args ? args.userContextPolicy : undefined;
            resourceInputs["userGroupResolutionConfiguration"] = args ? args.userGroupResolutionConfiguration : undefined;
            resourceInputs["userTokenConfigurations"] = args ? args.userTokenConfigurations : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["indexStatistics"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KendraIndex.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KendraIndex resources.
 */
export interface KendraIndexState {
    arn?: pulumi.Input<string>;
    capacityUnits?: pulumi.Input<inputs.KendraIndexCapacityUnits>;
    createdAt?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    documentMetadataConfigurationUpdates?: pulumi.Input<pulumi.Input<inputs.KendraIndexDocumentMetadataConfigurationUpdate>[]>;
    edition?: pulumi.Input<string>;
    errorMessage?: pulumi.Input<string>;
    indexStatistics?: pulumi.Input<pulumi.Input<inputs.KendraIndexIndexStatistic>[]>;
    name?: pulumi.Input<string>;
    roleArn?: pulumi.Input<string>;
    serverSideEncryptionConfiguration?: pulumi.Input<inputs.KendraIndexServerSideEncryptionConfiguration>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.KendraIndexTimeouts>;
    updatedAt?: pulumi.Input<string>;
    userContextPolicy?: pulumi.Input<string>;
    userGroupResolutionConfiguration?: pulumi.Input<inputs.KendraIndexUserGroupResolutionConfiguration>;
    userTokenConfigurations?: pulumi.Input<inputs.KendraIndexUserTokenConfigurations>;
}

/**
 * The set of arguments for constructing a KendraIndex resource.
 */
export interface KendraIndexArgs {
    capacityUnits?: pulumi.Input<inputs.KendraIndexCapacityUnits>;
    description?: pulumi.Input<string>;
    documentMetadataConfigurationUpdates?: pulumi.Input<pulumi.Input<inputs.KendraIndexDocumentMetadataConfigurationUpdate>[]>;
    edition?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    roleArn: pulumi.Input<string>;
    serverSideEncryptionConfiguration?: pulumi.Input<inputs.KendraIndexServerSideEncryptionConfiguration>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.KendraIndexTimeouts>;
    userContextPolicy?: pulumi.Input<string>;
    userGroupResolutionConfiguration?: pulumi.Input<inputs.KendraIndexUserGroupResolutionConfiguration>;
    userTokenConfigurations?: pulumi.Input<inputs.KendraIndexUserTokenConfigurations>;
}
