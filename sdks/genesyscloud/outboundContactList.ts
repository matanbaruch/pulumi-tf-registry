// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OutboundContactList extends pulumi.CustomResource {
    /**
     * Get an existing OutboundContactList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OutboundContactListState, opts?: pulumi.CustomResourceOptions): OutboundContactList {
        return new OutboundContactList(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'genesyscloud:index/outboundContactList:OutboundContactList';

    /**
     * Returns true if the given object is an instance of OutboundContactList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OutboundContactList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OutboundContactList.__pulumiType;
    }

    /**
     * Attempt Limit for this ContactList.
     */
    public readonly attemptLimitId!: pulumi.Output<string | undefined>;
    /**
     * Indicates if automatic time zone mapping is to be used for this ContactList. Changing the automatic_time_zone_mappings
     * attribute will cause the outboundcontact_list object to be dropped and recreated with a new ID
     */
    public readonly automaticTimeZoneMapping!: pulumi.Output<boolean | undefined>;
    /**
     * The settings of the columns selected for dynamic queueing. If updated, the contact list is dropped and recreated with a
     * new ID
     */
    public readonly columnDataTypeSpecifications!: pulumi.Output<outputs.OutboundContactListColumnDataTypeSpecification[] | undefined>;
    /**
     * The names of the contact data columns. Changing the column_names attribute will cause the outboundcontact_list object to
     * be dropped and recreated with a new ID
     */
    public readonly columnNames!: pulumi.Output<string[]>;
    /**
     * The division this entity belongs to.
     */
    public readonly divisionId!: pulumi.Output<string>;
    /**
     * Indicates which columns are email addresses. Changing the email_columns attribute will cause the outboundcontact_list
     * object to be dropped and recreated with a new ID. Required if phone_columns is empty
     */
    public readonly emailColumns!: pulumi.Output<outputs.OutboundContactListEmailColumn[] | undefined>;
    /**
     * The name for the contact list.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Indicates which columns are phone numbers. Changing the phone_columns attribute will cause the outboundcontact_list
     * object to be dropped and recreated with a new ID. Required if email_columns is empty
     */
    public readonly phoneColumns!: pulumi.Output<outputs.OutboundContactListPhoneColumn[] | undefined>;
    /**
     * The values in the previewModeColumnName column that indicate a contact should always be dialed in preview mode.
     */
    public readonly previewModeAcceptedValues!: pulumi.Output<string[] | undefined>;
    /**
     * A column to check if a contact should always be dialed in preview mode.
     */
    public readonly previewModeColumnName!: pulumi.Output<string | undefined>;
    /**
     * The name of contact list column containing the zip code for use with automatic time zone mapping. Only allowed if
     * 'automaticTimeZoneMapping' is set to true. Changing the zip_code_column_name attribute will cause the
     * outboundcontact_list object to be dropped and recreated with a new ID
     */
    public readonly zipCodeColumnName!: pulumi.Output<string | undefined>;

    /**
     * Create a OutboundContactList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OutboundContactListArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OutboundContactListArgs | OutboundContactListState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OutboundContactListState | undefined;
            resourceInputs["attemptLimitId"] = state ? state.attemptLimitId : undefined;
            resourceInputs["automaticTimeZoneMapping"] = state ? state.automaticTimeZoneMapping : undefined;
            resourceInputs["columnDataTypeSpecifications"] = state ? state.columnDataTypeSpecifications : undefined;
            resourceInputs["columnNames"] = state ? state.columnNames : undefined;
            resourceInputs["divisionId"] = state ? state.divisionId : undefined;
            resourceInputs["emailColumns"] = state ? state.emailColumns : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["phoneColumns"] = state ? state.phoneColumns : undefined;
            resourceInputs["previewModeAcceptedValues"] = state ? state.previewModeAcceptedValues : undefined;
            resourceInputs["previewModeColumnName"] = state ? state.previewModeColumnName : undefined;
            resourceInputs["zipCodeColumnName"] = state ? state.zipCodeColumnName : undefined;
        } else {
            const args = argsOrState as OutboundContactListArgs | undefined;
            if ((!args || args.columnNames === undefined) && !opts.urn) {
                throw new Error("Missing required property 'columnNames'");
            }
            resourceInputs["attemptLimitId"] = args ? args.attemptLimitId : undefined;
            resourceInputs["automaticTimeZoneMapping"] = args ? args.automaticTimeZoneMapping : undefined;
            resourceInputs["columnDataTypeSpecifications"] = args ? args.columnDataTypeSpecifications : undefined;
            resourceInputs["columnNames"] = args ? args.columnNames : undefined;
            resourceInputs["divisionId"] = args ? args.divisionId : undefined;
            resourceInputs["emailColumns"] = args ? args.emailColumns : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["phoneColumns"] = args ? args.phoneColumns : undefined;
            resourceInputs["previewModeAcceptedValues"] = args ? args.previewModeAcceptedValues : undefined;
            resourceInputs["previewModeColumnName"] = args ? args.previewModeColumnName : undefined;
            resourceInputs["zipCodeColumnName"] = args ? args.zipCodeColumnName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OutboundContactList.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OutboundContactList resources.
 */
export interface OutboundContactListState {
    /**
     * Attempt Limit for this ContactList.
     */
    attemptLimitId?: pulumi.Input<string>;
    /**
     * Indicates if automatic time zone mapping is to be used for this ContactList. Changing the automatic_time_zone_mappings
     * attribute will cause the outboundcontact_list object to be dropped and recreated with a new ID
     */
    automaticTimeZoneMapping?: pulumi.Input<boolean>;
    /**
     * The settings of the columns selected for dynamic queueing. If updated, the contact list is dropped and recreated with a
     * new ID
     */
    columnDataTypeSpecifications?: pulumi.Input<pulumi.Input<inputs.OutboundContactListColumnDataTypeSpecification>[]>;
    /**
     * The names of the contact data columns. Changing the column_names attribute will cause the outboundcontact_list object to
     * be dropped and recreated with a new ID
     */
    columnNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The division this entity belongs to.
     */
    divisionId?: pulumi.Input<string>;
    /**
     * Indicates which columns are email addresses. Changing the email_columns attribute will cause the outboundcontact_list
     * object to be dropped and recreated with a new ID. Required if phone_columns is empty
     */
    emailColumns?: pulumi.Input<pulumi.Input<inputs.OutboundContactListEmailColumn>[]>;
    /**
     * The name for the contact list.
     */
    name?: pulumi.Input<string>;
    /**
     * Indicates which columns are phone numbers. Changing the phone_columns attribute will cause the outboundcontact_list
     * object to be dropped and recreated with a new ID. Required if email_columns is empty
     */
    phoneColumns?: pulumi.Input<pulumi.Input<inputs.OutboundContactListPhoneColumn>[]>;
    /**
     * The values in the previewModeColumnName column that indicate a contact should always be dialed in preview mode.
     */
    previewModeAcceptedValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A column to check if a contact should always be dialed in preview mode.
     */
    previewModeColumnName?: pulumi.Input<string>;
    /**
     * The name of contact list column containing the zip code for use with automatic time zone mapping. Only allowed if
     * 'automaticTimeZoneMapping' is set to true. Changing the zip_code_column_name attribute will cause the
     * outboundcontact_list object to be dropped and recreated with a new ID
     */
    zipCodeColumnName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OutboundContactList resource.
 */
export interface OutboundContactListArgs {
    /**
     * Attempt Limit for this ContactList.
     */
    attemptLimitId?: pulumi.Input<string>;
    /**
     * Indicates if automatic time zone mapping is to be used for this ContactList. Changing the automatic_time_zone_mappings
     * attribute will cause the outboundcontact_list object to be dropped and recreated with a new ID
     */
    automaticTimeZoneMapping?: pulumi.Input<boolean>;
    /**
     * The settings of the columns selected for dynamic queueing. If updated, the contact list is dropped and recreated with a
     * new ID
     */
    columnDataTypeSpecifications?: pulumi.Input<pulumi.Input<inputs.OutboundContactListColumnDataTypeSpecification>[]>;
    /**
     * The names of the contact data columns. Changing the column_names attribute will cause the outboundcontact_list object to
     * be dropped and recreated with a new ID
     */
    columnNames: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The division this entity belongs to.
     */
    divisionId?: pulumi.Input<string>;
    /**
     * Indicates which columns are email addresses. Changing the email_columns attribute will cause the outboundcontact_list
     * object to be dropped and recreated with a new ID. Required if phone_columns is empty
     */
    emailColumns?: pulumi.Input<pulumi.Input<inputs.OutboundContactListEmailColumn>[]>;
    /**
     * The name for the contact list.
     */
    name?: pulumi.Input<string>;
    /**
     * Indicates which columns are phone numbers. Changing the phone_columns attribute will cause the outboundcontact_list
     * object to be dropped and recreated with a new ID. Required if email_columns is empty
     */
    phoneColumns?: pulumi.Input<pulumi.Input<inputs.OutboundContactListPhoneColumn>[]>;
    /**
     * The values in the previewModeColumnName column that indicate a contact should always be dialed in preview mode.
     */
    previewModeAcceptedValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A column to check if a contact should always be dialed in preview mode.
     */
    previewModeColumnName?: pulumi.Input<string>;
    /**
     * The name of contact list column containing the zip code for use with automatic time zone mapping. Only allowed if
     * 'automaticTimeZoneMapping' is set to true. Changing the zip_code_column_name attribute will cause the
     * outboundcontact_list object to be dropped and recreated with a new ID
     */
    zipCodeColumnName?: pulumi.Input<string>;
}
