// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IdentityDomainsRule extends pulumi.CustomResource {
    /**
     * Get an existing IdentityDomainsRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityDomainsRuleState, opts?: pulumi.CustomResourceOptions): IdentityDomainsRule {
        return new IdentityDomainsRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/identityDomainsRule:IdentityDomainsRule';

    /**
     * Returns true if the given object is an instance of IdentityDomainsRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityDomainsRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityDomainsRule.__pulumiType;
    }

    public readonly active!: pulumi.Output<boolean>;
    public readonly attributeSets!: pulumi.Output<string[] | undefined>;
    public readonly attributes!: pulumi.Output<string | undefined>;
    public readonly authorization!: pulumi.Output<string | undefined>;
    public /*out*/ readonly compartmentOcid!: pulumi.Output<string>;
    public readonly condition!: pulumi.Output<string>;
    public readonly conditionGroup!: pulumi.Output<outputs.IdentityDomainsRuleConditionGroup | undefined>;
    public /*out*/ readonly deleteInProgress!: pulumi.Output<boolean>;
    public readonly description!: pulumi.Output<string>;
    public /*out*/ readonly domainOcid!: pulumi.Output<string>;
    public readonly externalId!: pulumi.Output<string>;
    public /*out*/ readonly idcsCreatedBies!: pulumi.Output<outputs.IdentityDomainsRuleIdcsCreatedBy[]>;
    public readonly idcsEndpoint!: pulumi.Output<string>;
    public /*out*/ readonly idcsLastModifiedBies!: pulumi.Output<outputs.IdentityDomainsRuleIdcsLastModifiedBy[]>;
    public /*out*/ readonly idcsLastUpgradedInRelease!: pulumi.Output<string>;
    public /*out*/ readonly idcsPreventedOperations!: pulumi.Output<string[]>;
    public readonly locked!: pulumi.Output<boolean>;
    public /*out*/ readonly metas!: pulumi.Output<outputs.IdentityDomainsRuleMeta[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly ocid!: pulumi.Output<string>;
    public readonly policyType!: pulumi.Output<outputs.IdentityDomainsRulePolicyType>;
    public readonly resourceTypeSchemaVersion!: pulumi.Output<string | undefined>;
    public readonly returns!: pulumi.Output<outputs.IdentityDomainsRuleReturn[]>;
    public readonly ruleGroovy!: pulumi.Output<string>;
    public readonly schemas!: pulumi.Output<string[]>;
    public readonly tags!: pulumi.Output<outputs.IdentityDomainsRuleTag[] | undefined>;
    public /*out*/ readonly tenancyOcid!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.IdentityDomainsRuleTimeouts | undefined>;

    /**
     * Create a IdentityDomainsRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityDomainsRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityDomainsRuleArgs | IdentityDomainsRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdentityDomainsRuleState | undefined;
            resourceInputs["active"] = state ? state.active : undefined;
            resourceInputs["attributeSets"] = state ? state.attributeSets : undefined;
            resourceInputs["attributes"] = state ? state.attributes : undefined;
            resourceInputs["authorization"] = state ? state.authorization : undefined;
            resourceInputs["compartmentOcid"] = state ? state.compartmentOcid : undefined;
            resourceInputs["condition"] = state ? state.condition : undefined;
            resourceInputs["conditionGroup"] = state ? state.conditionGroup : undefined;
            resourceInputs["deleteInProgress"] = state ? state.deleteInProgress : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["domainOcid"] = state ? state.domainOcid : undefined;
            resourceInputs["externalId"] = state ? state.externalId : undefined;
            resourceInputs["idcsCreatedBies"] = state ? state.idcsCreatedBies : undefined;
            resourceInputs["idcsEndpoint"] = state ? state.idcsEndpoint : undefined;
            resourceInputs["idcsLastModifiedBies"] = state ? state.idcsLastModifiedBies : undefined;
            resourceInputs["idcsLastUpgradedInRelease"] = state ? state.idcsLastUpgradedInRelease : undefined;
            resourceInputs["idcsPreventedOperations"] = state ? state.idcsPreventedOperations : undefined;
            resourceInputs["locked"] = state ? state.locked : undefined;
            resourceInputs["metas"] = state ? state.metas : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ocid"] = state ? state.ocid : undefined;
            resourceInputs["policyType"] = state ? state.policyType : undefined;
            resourceInputs["resourceTypeSchemaVersion"] = state ? state.resourceTypeSchemaVersion : undefined;
            resourceInputs["returns"] = state ? state.returns : undefined;
            resourceInputs["ruleGroovy"] = state ? state.ruleGroovy : undefined;
            resourceInputs["schemas"] = state ? state.schemas : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tenancyOcid"] = state ? state.tenancyOcid : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as IdentityDomainsRuleArgs | undefined;
            if ((!args || args.condition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'condition'");
            }
            if ((!args || args.idcsEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'idcsEndpoint'");
            }
            if ((!args || args.policyType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyType'");
            }
            if ((!args || args.returns === undefined) && !opts.urn) {
                throw new Error("Missing required property 'returns'");
            }
            if ((!args || args.schemas === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemas'");
            }
            resourceInputs["active"] = args ? args.active : undefined;
            resourceInputs["attributeSets"] = args ? args.attributeSets : undefined;
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["authorization"] = args ? args.authorization : undefined;
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["conditionGroup"] = args ? args.conditionGroup : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["externalId"] = args ? args.externalId : undefined;
            resourceInputs["idcsEndpoint"] = args ? args.idcsEndpoint : undefined;
            resourceInputs["locked"] = args ? args.locked : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ocid"] = args ? args.ocid : undefined;
            resourceInputs["policyType"] = args ? args.policyType : undefined;
            resourceInputs["resourceTypeSchemaVersion"] = args ? args.resourceTypeSchemaVersion : undefined;
            resourceInputs["returns"] = args ? args.returns : undefined;
            resourceInputs["ruleGroovy"] = args ? args.ruleGroovy : undefined;
            resourceInputs["schemas"] = args ? args.schemas : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["compartmentOcid"] = undefined /*out*/;
            resourceInputs["deleteInProgress"] = undefined /*out*/;
            resourceInputs["domainOcid"] = undefined /*out*/;
            resourceInputs["idcsCreatedBies"] = undefined /*out*/;
            resourceInputs["idcsLastModifiedBies"] = undefined /*out*/;
            resourceInputs["idcsLastUpgradedInRelease"] = undefined /*out*/;
            resourceInputs["idcsPreventedOperations"] = undefined /*out*/;
            resourceInputs["metas"] = undefined /*out*/;
            resourceInputs["tenancyOcid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IdentityDomainsRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IdentityDomainsRule resources.
 */
export interface IdentityDomainsRuleState {
    active?: pulumi.Input<boolean>;
    attributeSets?: pulumi.Input<pulumi.Input<string>[]>;
    attributes?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    compartmentOcid?: pulumi.Input<string>;
    condition?: pulumi.Input<string>;
    conditionGroup?: pulumi.Input<inputs.IdentityDomainsRuleConditionGroup>;
    deleteInProgress?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    domainOcid?: pulumi.Input<string>;
    externalId?: pulumi.Input<string>;
    idcsCreatedBies?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsRuleIdcsCreatedBy>[]>;
    idcsEndpoint?: pulumi.Input<string>;
    idcsLastModifiedBies?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsRuleIdcsLastModifiedBy>[]>;
    idcsLastUpgradedInRelease?: pulumi.Input<string>;
    idcsPreventedOperations?: pulumi.Input<pulumi.Input<string>[]>;
    locked?: pulumi.Input<boolean>;
    metas?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsRuleMeta>[]>;
    name?: pulumi.Input<string>;
    ocid?: pulumi.Input<string>;
    policyType?: pulumi.Input<inputs.IdentityDomainsRulePolicyType>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
    returns?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsRuleReturn>[]>;
    ruleGroovy?: pulumi.Input<string>;
    schemas?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsRuleTag>[]>;
    tenancyOcid?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IdentityDomainsRuleTimeouts>;
}

/**
 * The set of arguments for constructing a IdentityDomainsRule resource.
 */
export interface IdentityDomainsRuleArgs {
    active?: pulumi.Input<boolean>;
    attributeSets?: pulumi.Input<pulumi.Input<string>[]>;
    attributes?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    condition: pulumi.Input<string>;
    conditionGroup?: pulumi.Input<inputs.IdentityDomainsRuleConditionGroup>;
    description?: pulumi.Input<string>;
    externalId?: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    locked?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    ocid?: pulumi.Input<string>;
    policyType: pulumi.Input<inputs.IdentityDomainsRulePolicyType>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
    returns: pulumi.Input<pulumi.Input<inputs.IdentityDomainsRuleReturn>[]>;
    ruleGroovy?: pulumi.Input<string>;
    schemas: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsRuleTag>[]>;
    timeouts?: pulumi.Input<inputs.IdentityDomainsRuleTimeouts>;
}
