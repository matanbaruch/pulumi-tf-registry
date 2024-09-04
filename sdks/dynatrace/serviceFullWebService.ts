// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServiceFullWebService extends pulumi.CustomResource {
    /**
     * Get an existing ServiceFullWebService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceFullWebServiceState, opts?: pulumi.CustomResourceOptions): ServiceFullWebService {
        return new ServiceFullWebService(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/serviceFullWebService:ServiceFullWebService';

    /**
     * Returns true if the given object is an instance of ServiceFullWebService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceFullWebService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceFullWebService.__pulumiType;
    }

    /**
     * A list of conditions necessary for the rule to take effect. If multiple conditions are specified, they must **all**
     * match a Request for the rule to apply. If there is no condition at all, the rule is always applied. Conditions are
     * evaluated against attributes, but do not modify them.
     */
    public readonly conditions!: pulumi.Output<outputs.ServiceFullWebServiceConditions | undefined>;
    /**
     * Description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * This setting is enabled (`true`) or disabled (`false`)
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Contributors to the Service Identifier calculation. All of the Contributors are always applied.
     */
    public readonly idContributors!: pulumi.Output<outputs.ServiceFullWebServiceIdContributors>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    public readonly insertAfter!: pulumi.Output<string>;
    /**
     * Define a management zone of the process group for which this service detection rule should be created.
     */
    public readonly managementZones!: pulumi.Output<string[] | undefined>;
    /**
     * Rule name
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a ServiceFullWebService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceFullWebServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceFullWebServiceArgs | ServiceFullWebServiceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceFullWebServiceState | undefined;
            resourceInputs["conditions"] = state ? state.conditions : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["idContributors"] = state ? state.idContributors : undefined;
            resourceInputs["insertAfter"] = state ? state.insertAfter : undefined;
            resourceInputs["managementZones"] = state ? state.managementZones : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as ServiceFullWebServiceArgs | undefined;
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.idContributors === undefined) && !opts.urn) {
                throw new Error("Missing required property 'idContributors'");
            }
            resourceInputs["conditions"] = args ? args.conditions : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["idContributors"] = args ? args.idContributors : undefined;
            resourceInputs["insertAfter"] = args ? args.insertAfter : undefined;
            resourceInputs["managementZones"] = args ? args.managementZones : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceFullWebService.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceFullWebService resources.
 */
export interface ServiceFullWebServiceState {
    /**
     * A list of conditions necessary for the rule to take effect. If multiple conditions are specified, they must **all**
     * match a Request for the rule to apply. If there is no condition at all, the rule is always applied. Conditions are
     * evaluated against attributes, but do not modify them.
     */
    conditions?: pulumi.Input<inputs.ServiceFullWebServiceConditions>;
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * This setting is enabled (`true`) or disabled (`false`)
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Contributors to the Service Identifier calculation. All of the Contributors are always applied.
     */
    idContributors?: pulumi.Input<inputs.ServiceFullWebServiceIdContributors>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    insertAfter?: pulumi.Input<string>;
    /**
     * Define a management zone of the process group for which this service detection rule should be created.
     */
    managementZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Rule name
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ServiceFullWebService resource.
 */
export interface ServiceFullWebServiceArgs {
    /**
     * A list of conditions necessary for the rule to take effect. If multiple conditions are specified, they must **all**
     * match a Request for the rule to apply. If there is no condition at all, the rule is always applied. Conditions are
     * evaluated against attributes, but do not modify them.
     */
    conditions?: pulumi.Input<inputs.ServiceFullWebServiceConditions>;
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * This setting is enabled (`true`) or disabled (`false`)
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Contributors to the Service Identifier calculation. All of the Contributors are always applied.
     */
    idContributors: pulumi.Input<inputs.ServiceFullWebServiceIdContributors>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    insertAfter?: pulumi.Input<string>;
    /**
     * Define a management zone of the process group for which this service detection rule should be created.
     */
    managementZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Rule name
     */
    name?: pulumi.Input<string>;
}
