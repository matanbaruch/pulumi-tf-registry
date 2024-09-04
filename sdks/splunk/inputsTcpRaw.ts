// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class InputsTcpRaw extends pulumi.CustomResource {
    /**
     * Get an existing InputsTcpRaw resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InputsTcpRawState, opts?: pulumi.CustomResourceOptions): InputsTcpRaw {
        return new InputsTcpRaw(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'splunk:index/inputsTcpRaw:InputsTcpRaw';

    /**
     * Returns true if the given object is an instance of InputsTcpRaw.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InputsTcpRaw {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InputsTcpRaw.__pulumiType;
    }

    public readonly acl!: pulumi.Output<outputs.InputsTcpRawAcl | undefined>;
    /**
     * Valid values: (ip | dns | none)Set the host for the remote server that is sending data.ip sets the host to the IP
     * address of the remote server sending data.dns sets the host to the reverse DNS entry for the IP address of the remote
     * server sending data.none leaves the host as specified in inputs.conf, which is typically the Splunk system
     * hostname.Default value is dns.
     */
    public readonly connectionHost!: pulumi.Output<string>;
    /**
     * Indicates if input is disabled.
     */
    public readonly disabled!: pulumi.Output<boolean>;
    /**
     * Host from which the indexer gets data.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * Index to store generated events. Defaults to default.
     */
    public readonly index!: pulumi.Output<string>;
    /**
     * Required. The input port which receives raw data.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Valid values: (parsingQueue | indexQueue) Specifies where the input processor should deposit the events it reads.
     * Defaults to parsingQueue.Set queue to parsingQueue to apply props.conf and other parsing rules to your data. Set queue
     * to indexQueue to send your data directly into the index.
     */
    public readonly queue!: pulumi.Output<string>;
    /**
     * Specifies in seconds the timeout value for adding a Done-key. Default value is 10 seconds. If a connection over the port
     * specified by name remains idle after receiving data for specified number of seconds, it adds a Done-key. This implies
     * the last event is completely received.
     */
    public readonly rawTcpDoneTimeout!: pulumi.Output<number>;
    /**
     * Allows for restricting this input to only accept data from the host specified here.
     */
    public readonly restrictToHost!: pulumi.Output<string>;
    /**
     * Sets the source key/field for events from this input. Defaults to the input file path.Sets the source key initial value.
     * The key is used during parsing/indexing, in particular to set the source field during indexing.It is also the source
     * field used at search time. As a convenience, the chosen string is prepended with 'source::'.Note: Overriding the source
     * key is generally not recommended. Typically, the input layer provides a more accurate string to aid in problem analysis
     * and investigation, accurately recording the file from which the data was retrieved. Consider use of source types,
     * tagging, and search wildcards before overriding this value.
     */
    public readonly source!: pulumi.Output<string>;
    /**
     * Set the source type for events from this input. "sourcetype=" is automatically prepended to <string>.Defaults to
     * audittrail (if signedaudit=true) or fschange (if signedaudit=false).
     */
    public readonly sourcetype!: pulumi.Output<string>;

    /**
     * Create a InputsTcpRaw resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InputsTcpRawArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InputsTcpRawArgs | InputsTcpRawState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InputsTcpRawState | undefined;
            resourceInputs["acl"] = state ? state.acl : undefined;
            resourceInputs["connectionHost"] = state ? state.connectionHost : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["index"] = state ? state.index : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["queue"] = state ? state.queue : undefined;
            resourceInputs["rawTcpDoneTimeout"] = state ? state.rawTcpDoneTimeout : undefined;
            resourceInputs["restrictToHost"] = state ? state.restrictToHost : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["sourcetype"] = state ? state.sourcetype : undefined;
        } else {
            const args = argsOrState as InputsTcpRawArgs | undefined;
            resourceInputs["acl"] = args ? args.acl : undefined;
            resourceInputs["connectionHost"] = args ? args.connectionHost : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["index"] = args ? args.index : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["queue"] = args ? args.queue : undefined;
            resourceInputs["rawTcpDoneTimeout"] = args ? args.rawTcpDoneTimeout : undefined;
            resourceInputs["restrictToHost"] = args ? args.restrictToHost : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["sourcetype"] = args ? args.sourcetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InputsTcpRaw.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InputsTcpRaw resources.
 */
export interface InputsTcpRawState {
    acl?: pulumi.Input<inputs.InputsTcpRawAcl>;
    /**
     * Valid values: (ip | dns | none)Set the host for the remote server that is sending data.ip sets the host to the IP
     * address of the remote server sending data.dns sets the host to the reverse DNS entry for the IP address of the remote
     * server sending data.none leaves the host as specified in inputs.conf, which is typically the Splunk system
     * hostname.Default value is dns.
     */
    connectionHost?: pulumi.Input<string>;
    /**
     * Indicates if input is disabled.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * Host from which the indexer gets data.
     */
    host?: pulumi.Input<string>;
    /**
     * Index to store generated events. Defaults to default.
     */
    index?: pulumi.Input<string>;
    /**
     * Required. The input port which receives raw data.
     */
    name?: pulumi.Input<string>;
    /**
     * Valid values: (parsingQueue | indexQueue) Specifies where the input processor should deposit the events it reads.
     * Defaults to parsingQueue.Set queue to parsingQueue to apply props.conf and other parsing rules to your data. Set queue
     * to indexQueue to send your data directly into the index.
     */
    queue?: pulumi.Input<string>;
    /**
     * Specifies in seconds the timeout value for adding a Done-key. Default value is 10 seconds. If a connection over the port
     * specified by name remains idle after receiving data for specified number of seconds, it adds a Done-key. This implies
     * the last event is completely received.
     */
    rawTcpDoneTimeout?: pulumi.Input<number>;
    /**
     * Allows for restricting this input to only accept data from the host specified here.
     */
    restrictToHost?: pulumi.Input<string>;
    /**
     * Sets the source key/field for events from this input. Defaults to the input file path.Sets the source key initial value.
     * The key is used during parsing/indexing, in particular to set the source field during indexing.It is also the source
     * field used at search time. As a convenience, the chosen string is prepended with 'source::'.Note: Overriding the source
     * key is generally not recommended. Typically, the input layer provides a more accurate string to aid in problem analysis
     * and investigation, accurately recording the file from which the data was retrieved. Consider use of source types,
     * tagging, and search wildcards before overriding this value.
     */
    source?: pulumi.Input<string>;
    /**
     * Set the source type for events from this input. "sourcetype=" is automatically prepended to <string>.Defaults to
     * audittrail (if signedaudit=true) or fschange (if signedaudit=false).
     */
    sourcetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InputsTcpRaw resource.
 */
export interface InputsTcpRawArgs {
    acl?: pulumi.Input<inputs.InputsTcpRawAcl>;
    /**
     * Valid values: (ip | dns | none)Set the host for the remote server that is sending data.ip sets the host to the IP
     * address of the remote server sending data.dns sets the host to the reverse DNS entry for the IP address of the remote
     * server sending data.none leaves the host as specified in inputs.conf, which is typically the Splunk system
     * hostname.Default value is dns.
     */
    connectionHost?: pulumi.Input<string>;
    /**
     * Indicates if input is disabled.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * Host from which the indexer gets data.
     */
    host?: pulumi.Input<string>;
    /**
     * Index to store generated events. Defaults to default.
     */
    index?: pulumi.Input<string>;
    /**
     * Required. The input port which receives raw data.
     */
    name?: pulumi.Input<string>;
    /**
     * Valid values: (parsingQueue | indexQueue) Specifies where the input processor should deposit the events it reads.
     * Defaults to parsingQueue.Set queue to parsingQueue to apply props.conf and other parsing rules to your data. Set queue
     * to indexQueue to send your data directly into the index.
     */
    queue?: pulumi.Input<string>;
    /**
     * Specifies in seconds the timeout value for adding a Done-key. Default value is 10 seconds. If a connection over the port
     * specified by name remains idle after receiving data for specified number of seconds, it adds a Done-key. This implies
     * the last event is completely received.
     */
    rawTcpDoneTimeout?: pulumi.Input<number>;
    /**
     * Allows for restricting this input to only accept data from the host specified here.
     */
    restrictToHost?: pulumi.Input<string>;
    /**
     * Sets the source key/field for events from this input. Defaults to the input file path.Sets the source key initial value.
     * The key is used during parsing/indexing, in particular to set the source field during indexing.It is also the source
     * field used at search time. As a convenience, the chosen string is prepended with 'source::'.Note: Overriding the source
     * key is generally not recommended. Typically, the input layer provides a more accurate string to aid in problem analysis
     * and investigation, accurately recording the file from which the data was retrieved. Consider use of source types,
     * tagging, and search wildcards before overriding this value.
     */
    source?: pulumi.Input<string>;
    /**
     * Set the source type for events from this input. "sourcetype=" is automatically prepended to <string>.Defaults to
     * audittrail (if signedaudit=true) or fschange (if signedaudit=false).
     */
    sourcetype?: pulumi.Input<string>;
}
